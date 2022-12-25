import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation';
import { IoIosColorPalette } from 'react-icons/io'

const Header = () => {
  return (
      <header>
        <div className='theme' >
          <button className='theme__icon'><IoIosColorPalette /></button>
        </div>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>MILAN SHARMA</h1>
          <CTA />

          <HeaderSocials />

          <div className='me' >
            <img className='milan' src={me} alt="me" />
          </div>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
        <TypeAnimation className='animation' sequence={['Full Stack Developer', 1000, 'Front End Developer', 1000, 'Back End Developer', 1000, 'Database Engineer', 1000, ]}
          speed={50}
          style={{ fontSize: '2em' }}
          wrapper="span"
          repeat={Infinity}
        />
      </header> 
  )
}

export default Header