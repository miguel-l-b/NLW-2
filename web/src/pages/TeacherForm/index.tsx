import React from 'react'

import PageHeader from '../../Components/PageHeader'
import Input from '../../Components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherList() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo" type="text" />
                    <Input name="avatar" label="Avatar" type="text" />
                    <Input name="whatsapp" label="whatsapp" type="text" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="subject" label="Matéria" type="text" />
                    <Input name="cost" label="Custo da sua hora por aula" type="text" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherList