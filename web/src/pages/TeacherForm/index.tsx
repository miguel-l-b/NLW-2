import React, { useState, FormEvent } from 'react'

import PageHeader from '../../Components/PageHeader'
import Input from '../../Components/Input'
import Textarea from '../../Components/TextArea'
import Select from '../../Components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherList() {
    const [name, setName] = useState("")
    const [avatar, setAvavar] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [bio, setBio] = useState("")

    const [subject, setSubject] = useState("")
    const [cost, setCost] = useState("")

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: "", to: ""}
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: "", to: "" }
        ])
    }

    function setScheduleItemValue(possition: number, field: string, value: string) {
        const updateSchaduleItens = scheduleItems.map((scheduleItem, index) => {
            if(index === possition) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault()

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems,
        })
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input 
                        name="name" label="Nome Completo" type="text"
                        value={name}
                        onChange={((e)=> {setName(e.target.value)})} 
                    />
                    <Input 
                        name="avatar" label="Avatar" type="text"
                        value={avatar}
                        onChange={((e) => {setAvavar(e.target.value)})}
                    />
                    <Input 
                        name="whatsapp" label="whatsapp" type="text"
                        value={whatsapp}
                        onChange={((e) => {setWhatsapp(e.target.value)})}    
                    />
                    <Textarea 
                        name="bio" label="Biografia"
                        value={bio}
                        onChange={((e) => {setBio(e.target.value)})} 
                    />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' }
                        ]}
                        onChange={((e) => {setSubject(e.target.value)})}
                    />
                    <Input 
                        name="cost" label="Custo da sua hora por aula" type="text"
                        value={cost}
                        onChange={((e) => {setCost(e.target.value)})}
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                            name="week_day" 
                            label="Dia da semana"
                            value={scheduleItem.week_day}
                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda-feira' },
                                { value: '2', label: 'Terça-feira' },
                                { value: '3', label: 'Quarta-feira' },
                                { value: '4', label: 'Quinta-feira' },
                                { value: '5', label: 'Sexta-feira' },
                                { value: '6', label: 'Sábado' },
                            ]}
                            />
                            <Input
                                name="from"
                                label="Das"
                                type="time"
                                value={scheduleItem.from}
                                onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                            />
                            <Input 
                                name="to"
                                label="Até"
                                type="time"
                                value={scheduleItem.to}
                                onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                            />
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="submit">
                        Salvar Cadastro
                    </button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherList