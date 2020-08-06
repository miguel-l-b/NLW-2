import React from 'react'

import PageHeader from '../../Components/PageHeader'
import TeacherItem from '../../Components/TeacherItem'
import Input from '../../Components/Input'

import './styles.css'

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" type="text" />
                    <Input name="week_day" label="Dia da semana" type="text" />
                    <Input name="time" label="Hora" type="time" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList