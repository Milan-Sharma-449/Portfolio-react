import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FaAward, FaMedal, FaStar } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience' >
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend' >
        <h3>Frontend Development</h3>
          <div className='experience__content' >
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSSL</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light' >Beginner</small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience__backend' >
        <h3>Backend Development</h3>
          <div className='experience__content' >
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light' >Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light' >Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className='c__t' >
        <h2>Certifications & Trainings</h2>
      </div>
      <div className='container experience__container' >
        <div>
          <h3>Certifications</h3>
          <article className='experience__details'>
              <FaAward className='experience__details-icon' />
              <div>
                <h4>Kotlin</h4>
                <small className='text-light' >Internshala</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAward className='experience__details-icon' />
              <div>
                <h4>Programming in Java</h4>
                <small className='text-light' >NPTEL</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAward className='experience__details-icon' />
              <div>
                <h4>Programming in C++</h4>
                <small className='text-light' >NPTEL</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAward className='experience__details-icon' />
              <div>
                <h4>Python Basics</h4>
                <small className='text-light' >Coursera</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAward className='experience__details-icon' />
              <div>
                <h4>Python for Everybody</h4>
                <small className='text-light' >NPTEL</small>
              </div>
            </article>
        </div>
        <div>
          <h3>Trainings</h3>
          <article className='experience__details'>
              <FaMedal className='experience__details-icon' />
              <div>
                <h4>UI/UX Development</h4>
                <small className='text-light' >Internshala (Ongoing)</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaMedal className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light' >Internshala</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaMedal className='experience__details-icon' />
              <div>
                <h4>Web Development (Html, Css, Js, Bootstrap)</h4>
                <small className='text-light' >Internshala</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaMedal className='experience__details-icon' />
              <div>
                <h4>Core Java</h4>
                <small className='text-light' >Internshala</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaMedal className='experience__details-icon' />
              <div>
                <h4>Android App Development</h4>
                <small className='text-light' >Internshala</small>
              </div>
            </article>
        </div>
      </div>
      <div className='c__t' >
        <h2>Other Skills</h2>
      </div>
      <div className='container experience__container-skills' >
        <div className='skills__content' >
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>NodeJs</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>Leadership</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>MySql</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>DataBase</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>Servelets</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>JDBC</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>Git</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>Jupyter</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>Html5</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>CSS3</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>JavaScript</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>Java</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>Python</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>C Programming</h4>
          </article>
          <article className='skills__details'>
            <FaStar className='experience__details-icon' />
              <h4>C++ Programming</h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience