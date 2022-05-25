import React from 'react'
import "./footer.css"
import {FiYoutube} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <div className='footer__logo'>
      <a href="/#">DFLY</a>
      </div>

      <ul className='permalinks'>
        <li><a href="/impressum">Impressum</a></li>
      </ul>



      <div className="footer__socials">
        <a href="https://instagram.com/fjodorlundgren" target="_blank"><FiInstagram size={20}/></a>
        <a href="https://m.youtube.com/channel/UCYPE2ipQpWZ-x2eeVfNNMLg/featured" target="_blank"><FiYoutube size={20}/></a>
        <a href="https://www.linkedin.com/in/fjodor-lundgren-785396215/" target="_blank" ><AiOutlineLinkedin size={20}/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Fjodor Lundgren</small>
      </div>
    </footer>
  )
}

export default Footer