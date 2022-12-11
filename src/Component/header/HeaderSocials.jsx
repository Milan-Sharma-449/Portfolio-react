import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://instagram.com' target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href='https://facebook.com' target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href='https://twitter.com' target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials