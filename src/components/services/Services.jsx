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
          <h2>
             Neue Drohnentechnik ermöglichen nie dagewesene Perspektiven und Aufnehmen welche kommerziellen Drohnen einfach nicht mithalten können. Nicht nur Cinematische Präzissionsflüge durch die kleinsten Spalten sondern auch waghalsige Flugmanöver von Gebäuden sind möglich. FPV Drohnenaufnahmen  verleihen den besonderen Wow-Effekt für Ihr Film Projekt.
          </h2>
        </div>
        <div className="headline__services">
          <h1>Was bietet DFLY Camera?</h1>
        </div>
        <div className="map__services">
          <div className="step__services">
            <RiTreasureMapLine size={120}/>
            <h3>Gemeinsame Planung & Konzeption des Fluges</h3>
          </div>
          <div className="step__services">
            <GiVideoCamera size={120}/>
            <h3>Durchführung des Fluges durch präzise Flugmanöver</h3>
          </div>

          <div className="step__services">
            <GiFilmStrip size={120}/>
            <h3>Fertigstellung der Aufnahmen durch spezielle Software</h3>
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