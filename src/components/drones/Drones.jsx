import React from 'react'
import "./drones.css"
import Drone1 from "../../assets/drones/DSC00184.jpg"
import Drone2 from "../../assets/drones/DSC00188.jpg"
import Drone3 from "../../assets/drones/DSC00196.jpg"
import {IoIosSpeedometer} from "react-icons/io"
import {MdHighQuality} from "react-icons/md"
import {GiHummingbird} from "react-icons/gi"
import {BiTransfer} from "react-icons/bi"
import {BsFillPeopleFill} from "react-icons/bs"
import {FaFeather} from "react-icons/fa"
import {BsFillLightningChargeFill} from "react-icons/bs"

const Drones = () => {
  return (
    <section id='drones'>
      <div className="container drones__container">
        <div className="header__drones">
      <h1>Wie werden die Aufnahmen umgesetzt?</h1>
      <h3>Von Aufnahmen vom Sturzflug eines Gebäudes bis hin zum Durchfliegen kleinster Löcher sind wir für alle Aufträge mit einer passenden Drohne gewappnet. <br/>Entscheidend für das Projekt ist Ihre Vorstellungskraft</h3>
        </div>
        <article className='drone__content'>
          <div className="drone__head">
            <h2>Cine Race Drohne</h2>
          </div>
          <div className="drone">
            <div className="drone-image">
              <img src={Drone1} alt="Freestyle" className='drone__png'/>
            </div>
            <div className="drone__text">
            <p>Dank der extremen Leistung kann die Drohne die waghalsigsten Sturzflüge, Saltos und Manöver ausführen. Dabei erreicht die Drohne Geschwindigkeiten von bis zu 160 km/h in nur wenigen Sekunden Beschleunigung. Verfolgung von Autos, Aufnahmen von Gebäuden: Die Drohne ist für alle Outdoor Einsätze gewappnet. Dabei nimmt die Drohne hochauflösende Videos in 4k mithilfe einer Gopro auf.</p>
            <div className="capabilities">
            <div className="capability">
            <IoIosSpeedometer size={28} className='experience__details-icon'/>
            <h3>160 km/h</h3>
            </div>
            <div className="capability">
            <MdHighQuality size={28} className='experience__details-icon'/>
            <h3>4K Log</h3>
            </div>
            <div className="capability">
            <GiHummingbird size={28} className='experience__details-icon'/>
            <h3>Akrobatisch</h3>
            </div>
            <div className="capability">
            <BsFillLightningChargeFill size={30} className='experience__details-icon'/>
            <h3>0-100 km/h in 1.5s</h3>
            </div>
            </div>
            </div>

          </div>
        </article>
        <article className='drone__content'>
          <div className="drone__head">
            <h2>Cinewhoop Drohne XL</h2>
          </div>
          <div className="drone">
            <div className="drone-image">
              <img src={Drone2} alt="Freestyle" className='drone__png' />
            </div>
            <div className="drone__text">
            <p>Der Allrounder kann mit Propellerschützern drinnen oder ohne Propellerschützer draußen eingesetzt werden. Dabei kann die Drohne cinematische Flugbahnen nahe Menschen oder mit bis zu 120 km/h akrobatische Saltos ausführen. Dabei nimmt die Drohne doppelte 4k Video Streams auf.    </p>
            <div className="capabilities">
            <div className="capability">
            <IoIosSpeedometer size={28} className='experience__details-icon'/>
            <h3>120 km/h</h3>
            </div>
            <div className="capability">
            <MdHighQuality size={28} className='experience__details-icon'/>
            <h3>4K Log</h3>
            </div>
            <div className="capability">
            <BiTransfer size={28} className='experience__details-icon'/>
            <h3>Präzision/Geschwindigkeit</h3>
            </div>
            <div className="capability">
            <h3></h3>
            </div>
            </div>
            </div>
            </div>
        </article>
        <article className='drone__content'>
          <div className="drone__head">
            <h2>Cinewhoop Drohne </h2>
          </div>
          <div className="drone">
            <div className="drone-image" >
              <img src={Drone3} alt="Freestyle" className='drone__png'/>
            </div>
            <div className="drone__text">
            <p>Der Cinewhoop fällt zwar wegen seiner Größe nicht auf, ist jedoch auf keinen Fall zu unterschätzen. Dank der Stripped Gopro macht die Drohne Aufnahmen mit bis zu 4k 60 fps im Log-Format und tut dies fast unhörbar. Dank dem kleinen Formfaktor und dem niedrigem Gewicht kann die Drohne ohne Sicherheitsbedenken um Menschen und in Innenräumen eingesetzt werden.</p>
            <div className="capabilities">
            <div className="capability">
            <IoIosSpeedometer size={28} className='experience__details-icon'/>
            <h3>60 km/h</h3>
            </div>
            <div className="capability">
            <MdHighQuality size={28} className='experience__details-icon'/>
            <h3>4K Log</h3>
            </div>
            <div className="capability">
            <BsFillPeopleFill size={28} className='experience__details-icon'/>
            <h3>Unbedenklich</h3>
            </div>
            <div className="capability">
            <FaFeather size={28} className='experience__details-icon'/>
            <h3>&lt; 250g</h3>
            </div>
            </div>
            </div>
          </div>
        </article>
        {/* <article className='drone__content'>
          <div className="drone__head">
            <h3>Tinywhoop</h3>
          </div>
          <div className="drone">
            <div className="drone-image">
              <img src={Drone4} alt="Freestyle" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet quas illo ut commodi. Necessitatibus provident officiis assumenda ea? Adipisci perspiciatis, placeat ex tempora amet nostrum voluptas repellendus possimus magni.</p>

          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Drones