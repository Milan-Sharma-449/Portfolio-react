/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FiInstagram, FiGithub, FiLinkedin} from 'react-icons/fi'
import {FaFacebookF, FaTwitter, FaStackOverflow} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
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
        <a href='https://www.facebook.com/milan.sharma.980315/'><FaFacebookF /></a>
        <a href='https://www.instagram.com/milansharma_449/'><FiInstagram /></a>
        <a href='https://twitter.com/milansharma449'><FaTwitter /></a>
        <a href='https://github.com/Milan-Sharma-449'><FiGithub /></a>
        <a href='https://www.linkedin.com/in/milan-sharma-3b9985166/'><FiLinkedin /></a>
        <a href='https://stackoverflow.com/users/20611664/milan-sharma'><FaStackOverflow /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All rights reserved. <a href='https://www.linkedin.com/in/milan-sharma-3b9985166/'><strong>Milan Sharma</strong></a> (2022)</small>
      </div>
    </footer>
  )
}

export default Footer