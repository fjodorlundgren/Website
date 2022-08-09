import React from 'react'
import "./landingPage.css"
import Screen from './Screen'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
import { useTranslation } from "react-i18next";
const Header = () => {
  return (
    <header>
    <Screen/>
    <div className="filterGrid"></div>
    <div className='container logo'>
    <h2>DFLY</h2>
    </div>

    <div className="container header__container">

        <h1>FPV-Aufnahmen</h1>
        <h3 >Einzigartige Perspektiven ermöglichen</h3>
        <CTA/>
        <HeaderSocials/> 



        <a href="#services" className="scroll__down">Nach Unten Scrollen</a>
      </div>

    </header>
  )
}

export default Header