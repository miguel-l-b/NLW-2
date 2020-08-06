import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'


function Landing() {
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data

            setTotalConnections(total)
        })
    },[])

    return (
      <div id="page-landing">
          <div id="page-landig-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy" />
                <h2>Sua Plataforma de estudos online.</h2>
            </div>
            <img 
                src={landingImg} 
                alt="Plataforma de estudos" 
                className="hero-image"
            />
            <div className="buttons-container">
                <a href="/study" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </a>

                <a href="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Dar aulas"/>
                    Dar aulas
                </a>
            </div>
            <span className="total-connections">
                Total de 1:16:05 {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
            </span>
        </div>
     </div>
      
    )
  }
  
  export default Landing