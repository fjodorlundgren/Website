import React from 'react'
import "./services.css"
import {RiTreasureMapLine} from "react-icons/ri"
import {GiVideoCamera} from "react-icons/gi"
import {GiFilmStrip} from "react-icons/gi"
const Services = () => {
  return (
    <section id='services'>
      <div className="container services__container">
        <div className="header__services">
          <h1>Was sind FPV Drohnenaufnahmen?</h1>
          <h2>
          Die neue Drohnentechnik FPV ermöglicht nie dagewesene Perspektiven und Aufnahmen, an die kommerzielle Drohnen nicht herankommen können. Nicht nur cinematische Präzissionsflüge durch die kleinsten Zwischenräume, sondern auch waghalsige Flugmanöver innerhalb von Gebäuden sind möglich. DFLY Camera bringt jahrelange Erfahrung, Zertifizierung als Drohnenpilot und hohe Präzission mit um den besonderen Wow-Effekt für Ihr Filmprojekt zu ermöglichen.
          </h2>
        </div>
        <div className="headline__services">
          <h1>Was bietet DFLY Camera?</h1>
        </div>
        <div className="map__services">
          <div className="step__services">
            <RiTreasureMapLine size={120}/>
            <h2>Gemeinsame Planung & Konzeption des Fluges</h2>
          </div>
          <div className="step__services">
            <GiVideoCamera size={120}/>
            <h2>Durchführung des Fluges durch präzise Flugmanöver</h2>
          </div>

          <div className="step__services">
            <GiFilmStrip size={120}/>
            <h2>Fertigstellung der Aufnahmen durch spezielle Software</h2>
          </div>
        </div>
        {/* <div className="services__decision">
            <div className="services__inquiry">
              <h4>Haben wir Sie überzeugt? <br/> Fragen Sie unverbindlich an.</h4>
              <a href="/#contact"className='btn-primary btn button-services'>
                Jetzt anfragen
              </a>
            </div>
            <div className="services__inquiry">
              <h4>Brauchen Sie noch mehr Ideen? <br/></h4>
              <a href="https://www.youtube.com/channel/UCYPE2ipQpWZ-x2eeVfNNMLg" target="_blank" className='btn-primary btn button-services'>
                Inspirieren lassen
              </a>
            </div>
        </div> */}
        <div className="services__footer">
          <h3>
            
          </h3>
        </div>
      </div>

    </section>
  )
}

export default Services