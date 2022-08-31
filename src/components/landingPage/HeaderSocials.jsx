import React from 'react'
import {FiYoutube} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
 const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.youtube.com/channel/UCYPE2ipQpWZ-x2eeVfNNMLg/about" target="_blank"><FiYoutube size={20}/></a>
        <a href="https://www.linkedin.com/in/fjodorlundgren" target="_blank"><AiOutlineLinkedin size={20}/></a>
        <a href="https://instagram.com/fjodorlundgren" target="_blank"><FiInstagram size={20}/></a>
    </div>
  )
}

export default HeaderSocials