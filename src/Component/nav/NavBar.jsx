/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'

const NavBar = () => {
  return (
    <section>
      <ul className='permalinks__navbar'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </section>
  )
}

export default NavBar