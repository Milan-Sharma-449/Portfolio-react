import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/download.jpeg'
import IMG2 from '../../assets/project-1.jpg'
import IMG3 from '../../assets/tictactoe.png'
import IMG4 from '../../assets/Connect4.jpeg'
import IMG5 from '../../assets/project-3.jpg'
import IMG6 from '../../assets/portfolio.png'
import IMG7 from '../../assets/sakila_project.jpg'
import IMG8 from '../../assets/internship_hrc.webp'
import IMG9 from '../../assets/code_editor.png'

const Portfolio = () => {
  return (
  <section id='portfolio' >
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio++container' >
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="Chat App" />
        </div>
        <h3>Sinit Chat (Chat App)</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG2} alt="Chat App" />
        </div>
        <h3>Box-Office</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG3} alt="Chat App" />
        </div>
        <h3>Tic Tac Toe</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG4} alt="Chat App" />
        </div>
        <h3>Connect4</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG5} alt="Chat App" />
        </div>
        <h3>LifeStyle Store</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG5} alt="Chat App" />
        </div>
        <h3>E-Commerce</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG6} alt="Chat App" />
        </div>
        <h3>Personal Portfolio (Using BootStrap)</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG6} alt="Chat App" />
        </div>
        <h3>Personal Portfolio (Html / Css / Js)</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG7} alt="Chat App" />
        </div>
        <h3>Sakila Film Project (HighRadius Internship) </h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG8} alt="Chat App" />
        </div>
        <h3>AI-Enabled B2B Fin-Tech Management Dashboard for Accounts Receivables (HighRadius Corporate Internship)</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={IMG9} alt="Chat App" />
        </div>
        <h3>Online Code Editor</h3>
        <a href='https/github.com' className='btn' target='_blank' >Github</a>
        <a href='https/github.com' className='btn btn_primary' target='_blank' >LiveDemo</a>
      </article>
    </div>
  </section>
  )
}

export default Portfolio