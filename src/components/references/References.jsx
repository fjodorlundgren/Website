import React from 'react'
import "./references.css"

const References = () => {
  return (
    <section id='references'>
      <div className="container references__container">
        <div className="header__references">
          <h1>Referenzen</h1>
        </div>
        <div className="videos">
          <div className="video">
          <iframe src="https://player.vimeo.com/video/733587037?h=c29e8fec59" height="360" width="640"   frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>          </div>
           <div className="video">
          <iframe src="https://player.vimeo.com/video/726264674?h=d81040dd9c" height="360" width="640"   frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>          </div>
          <div className="video">
          <iframe src="https://player.vimeo.com/video/737876774?h=1c063d071e" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>          </div>
          </div>
        <div className="full__references btn btn-primary">
          <a href="https://vimeo.com/user145814511" target="_blank">
              <h3>Zum gesamtem Portfolio</h3>

          </a>
        </div>
      </div>
    </section>
  )
}

export default References

//<div className="video">
//<iframe src="https://player.vimeo.com/video/729114698?h=dd9866e5f0" height="480" width="640" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>           </div>
//<div className="video">
//<iframe src="https://player.vimeo.com/video/733587037?h=c29e8fec59" height="480" width="640"   frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>          </div>
