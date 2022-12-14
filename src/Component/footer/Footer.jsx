/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FiInstagram, FiGithub} from 'react-icons/fi'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <Footer>
      <a href='#' className='footer__logo'>MILAN</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><FaTwitter /></a>
        <a href='https://github.com'><FiGithub /></a>
      </div>
    </Footer>
  )
}

export default Footer