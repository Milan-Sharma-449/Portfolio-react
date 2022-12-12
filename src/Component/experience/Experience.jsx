import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' >
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend' >
          <h3>Frontend Development</h3>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light' >Experienced</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>CSSL</h4>
            <small className='text-light' >Intermediate</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-light' >Intermediate</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-light' >Intermediate</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>React</h4>
            <small className='text-light' >Intermediate</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>****</h4>
            <small className='text-light' >Experienced</small>
          </article>
        </div>


        <div className='experience__frontend' >
          <h3>Backend Development</h3>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>Node JS</h4>
            <small className='text-light' >Intermediate</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>MySql</h4>
            <small className='text-light' >Intermediate</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>PHP</h4>
            <small className='text-light' >Intermediate</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>MongoDB</h4>
            <small className='text-light' >Beginner</small>
          </article>
          <article className='experience__content'>
            <BsPatchCheckFill />
            <h4>Python</h4>
            <small className='text-light' >Intermediate</small>
          </article>
        </div>
        </div>
    </section>
  )
}

export default Experience