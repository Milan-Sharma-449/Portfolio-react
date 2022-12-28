/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { AiOutlineBook, AiFillProject, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const nav = () => {

const[activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><AiOutlineBook /></a>
      <a href='#services' onClick={() => setActiveNav ('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine /></a>
      <a href='#portfolio' onClick={() => setActiveNav ('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><AiFillProject /></a>
      <a href='#contact' onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default nav