import React from 'react'
import "./testimonials.css"
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="container testimonials__container">
        <div className="header__testimonials">
            <h1>Kunden</h1>
        </div>
        <div className="client__list">
          <div className="client">ZRCE Beach</div>
          <div className="client">Potsdamer Feuerwerk</div>
          <div className="client">Engel und Völkers</div> 
           {//SGN, Heinrich Hertz, e-pixler
           }
        </div>
      </div>
      </section>
  )
}

export default Testimonials