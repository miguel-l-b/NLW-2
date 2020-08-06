import {Request, Response} from 'express'

import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface scheduleItem {
    week_day: number
    from: string
    to: string
}

export default class ClassesController {
    async index(req: Request, res: Response) {
        const filters = req.query

        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string

        if(!week_day || !subject || !time){
            return res.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')
        .whereExists(function() {
            this.select('classes_schedule.*')
            .from('classes_schedule')
            .whereRaw('`classes_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`classes_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`classes_schedule`.`from` <= ??', [Number(timeInMinutes)])
            .whereRaw('`classes_schedule`.`to` > ??', [Number(timeInMinutes)])
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select('classes.*', 'users.*')

        return res.json(classes)
    }

    async create(req: Request, res: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body
    
        const trx = await db.transaction()
    
        try{
            const inserterUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
        
            const user_id = inserterUsersIds[0]
        
            const inserterClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            })
        
            const class_id = inserterClassesIds[0]
        
            const classScedule = schedule.map((scheduleItem: scheduleItem) => {
                return{
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                }
            })
        
            await trx('classes_schedule').insert(classScedule)
        
            await trx.commit()
        
            res.status(201).send()
        } catch (err) {
            await trx.rollback()
    
            return res.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}