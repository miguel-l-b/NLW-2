import React from 'react'

import PageHeader from '../../Components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherList() {
    return(
        <div id="page-techer-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-techers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="techer-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/59874694?s=460&u=4d7470b960cf4ffb15403de6a75bc79cd54e4452&v=4" alt="Avatar"/>
                        <div>
                            <strong>Nome Proffy</strong>
                            <span>Matéria</span>
                        </div>
                    </header>
                    <p>
                        Descrição do professor! descri descri descri
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 30,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList