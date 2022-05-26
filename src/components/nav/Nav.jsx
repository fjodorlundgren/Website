import React from 'react'
import {useState} from "react"
import "./nav.css"
import {GiDeliveryDrone} from "react-icons/gi"
import {FaHome} from "react-icons/fa"
import {MdDesignServices} from "react-icons/md"
import {BiMessageSquareDetail} from "react-icons/bi"
const Nav =() => {
  const[activeNav, setActiveNav]= useState("/#")
  //missing portfolio
  return (
    <nav>
         <a href="/#" onClick={() => setActiveNav("/#")} className={activeNav ==="/#" ? "active" : "/" }><FaHome/></a>
         <a href="/#services" onClick={() => setActiveNav("/#services")} className={activeNav ==="/#services" ? "active" : "/" }><MdDesignServices/></a>
         <a href="/#drones" onClick={() => setActiveNav("/#drones")} className={activeNav ==="/#drones" ? "active" : "/" }><GiDeliveryDrone/></a>
         <a href="/#contact" onClick={() => setActiveNav("/#contact")} className={activeNav ==="/#contact" ? "active" : "/" }><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav