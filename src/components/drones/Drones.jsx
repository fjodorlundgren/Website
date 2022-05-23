import React from 'react'
import "./drones.css"
import Drone1 from "../../assets/drones/P1080569.jpg"
import Drone2 from "../../assets/drones/P1080573.jpg"
import Drone3 from "../../assets/drones/P1080580.jpg"
import {BsPatchCheckFill} from "react-icons/bs"
const Drones = () => {
  return (
    <section id='drones'>
      <div className="container drones__container">
        <div className="header__drones">
      <h1>Welche Drohnen werden geflogen?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et nobis quisquam fugiat. Cupiditate provident cumque, architecto officiis dignissimos odio.</p>
        </div>
        <article className='drone__content'>
          <div className="drone__head">
            <h2>Cine Race Drohne</h2>
          </div>
          <div className="drone">
            <div className="drone-image">
              <img src={Drone1} alt="Freestyle"/>
            </div>
            <div className="content__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae corrupti pariatur expedita, placeat nostrum ad voluptate consequatur laborum optio nam consectetur blanditiis error magni praesentium non nisi quidem porro totam ea? Amet dolores odio natus. Dolore tempora neque harum, et illum aut unde nemo laudantium dolorum doloribus dolores eaque explicabo veniam eligendi natus aliquid magni libero quas ipsum aliquam in debitis officia quo dolorem. Natus dolorum sequi sunt, ab nam sint voluptate tempore facere eaque, neque dolore perferendis quam? Reiciendis illo consequatur excepturi quasi atque. Obcaecati possimus aliquid odit?</p>
            <div className="capabilities">
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>150 km/h</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>4K Log</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>Akrobatisch</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>0-100 km/h in 1.5s</h3>
            </div>
            </div>
            </div>

          </div>
        </article>
        <article className='drone__content'>
          <div className="drone__head">
            <h2>Cinewhoop/Freestyle</h2>
          </div>
          <div className="drone">
            <div className="drone-image">
              <img src={Drone2} alt="Freestyle" />
            </div>
            <div className="drone__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet quas illo ut commodi. Necessitatibus provident officiis assumenda ea? Adipisci perspiciatis, placeat ex tempora amet nostrum voluptas repellendus possimus magni.</p>
            <div className="capabilities">
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>120 km/h</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>4K Log</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>Freestyle/Cinewhoop</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3></h3>
            </div>
            </div>
            </div>
            </div>
        </article>
        <article className='drone__content'>
          <div className="drone__head">
            <h2>Cinewhoop</h2>
          </div>
          <div className="drone">
            <div className="drone-image">
              <img src={Drone3} alt="Freestyle"/>
            </div>
            <div className="drone__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet quas illo ut commodi. Necessitatibus provident officiis assumenda ea? Adipisci perspiciatis, placeat ex tempora amet nostrum voluptas repellendus possimus magni.</p>
            <div className="capabilities">
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>60 km/h</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>4K Log</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
            <h3>Hohe Präzesion</h3>
            </div>
            <div className="capability">
            <BsPatchCheckFill className='experience__details-icon'/>
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