import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.png'
import { FaAward } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container' >
        <div className='about__me' >
          <div className='about__me-image' >
            <img src={ME} alt='About_Image' />
          </div>
        </div>
        <div className='about__content' >
          <div className='about__cards' >
            <article className='about__card' >
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card' >
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
            <article className='about__card' >
              <BsCodeSlash className='about__icon' />
              <h5>Trainings Done</h5>
              <small>5+</small>
            </article>
          </div>
          <p>
          Hello! I’m Milan Sharma. I am passionate about Web Development and Web Design. I am a skilled full-stack developer and master of web tools such as Html, Css, Js, React. I am a quick learner and a team worker that gets the job done.
          </p>
          <p>
          I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.
          </p>
          <a href='#contact' className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About