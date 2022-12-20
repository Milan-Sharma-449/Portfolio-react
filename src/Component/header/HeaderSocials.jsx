import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
import {FaStackOverflow} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href='https://www.linkedin.com/in/milan-sharma-3b9985166/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Milan-Sharma-449' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://www.instagram.com/milansharma_449/' target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href='https://www.facebook.com/milan.sharma.980315/' target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href='https://twitter.com/milansharma449' target="_blank" rel="noreferrer"><BsTwitter /></a>
        <a href='https://stackoverflow.com/users/20611664/milan-sharma'><FaStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials