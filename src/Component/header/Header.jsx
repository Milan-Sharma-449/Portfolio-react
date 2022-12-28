import React from 'react'
import './header.css'
import { TypeAnimation } from 'react-type-animation'
import CTA from './CTA'
import IMG from '../img/banner/home-right.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section class="home_banner_area">
		<div class="banner__inner">
			<div class="container_head">
						<div class="banner__content">
							<h3>Hell0</h3>
							<h1>I am <strong style={{color: '#4bd5ff'}} >Milan Sharma</strong> </h1>
              <TypeAnimation className='animation' sequence={['Full Stack Developer', 1000, 'Front End Developer', 1000, 'Back End Developer', 1000, 'Database Engineer', 1000, ]}
                speed={50}
                style={{ fontSize: '2em' }}
                wrapper="span"
                repeat={Infinity}
              />
              <CTA  />
              <HeaderSocials />
						</div>
					</div>
						<div class="home__img">
              <img src={IMG} alt="IMG" />
						</div>
				</div>
	</section>
    </header>
  )
}

export default Header