import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
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
    )
}

export default TeacherItem