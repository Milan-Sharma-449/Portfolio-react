import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chat_app.jpeg'
import IMG2 from '../../assets/project-1.jpg'
import IMG3 from '../../assets/tictactoe.png'
import IMG5 from '../../assets/project-3.jpg'
import IMG6 from '../../assets/portfolio.png'
import IMG4 from '../../assets/Connect4.jpeg'
import IMG7 from '../../assets/sakila_project.jpg'
import IMG8 from '../../assets/internship_hrc.webp'
import IMG10 from '../../assets/temperature.jpg'
import IMG9 from '../../assets/code_editor.png'


const data = [
	{
		id: 1,
		image: IMG1,
		title: "Sinit Chat (Chat App)",
		github: 'https://github.com/Milan-Sharma-449/chat-app',
		demo: 'https://chat-web-app-d4c52.web.app/'
	},
	{
		id: 2,
		image: IMG2,
		title: "Box-Office",
		github: 'https://github.com/Milan-Sharma-449/box-office',
		demo: 'https://milan-sharma-449.github.io/box-office/#/'
	},
	{
		id: 3,
		image: IMG5,
		title: "E-Commerce",
		github: 'https://github.com/Milan-Sharma-449/E-Store-Based-on-php-',
		demo: 'https://github.com/Milan-Sharma-449/E-Store-Based-on-php-'
	},
	{
		id: 4,
		image: IMG3,
		title: "Tic Tac Toe",
		github: 'https://github.com/Milan-Sharma-449/TicTacToe',
		demo: 'http://playing-tic-tac-toe.surge.sh/'
	},
	{
		id: 5,
		image: IMG5,
		title: "LifeStyle Store",
		github: 'https://github.com/Milan-Sharma-449/LifeStyle-Store-Web-Project-',
		demo: 'https://github.com/Milan-Sharma-449/LifeStyle-Store-Web-Project-'
	},
	{
		id: 6,
		image: IMG6,
		title: "Personal Portfolio (Using BootStrap)",
		github: 'https://github.com/Milan-Sharma-449/Portfolio',
		demo: 'https://milansharma449portfolio.netlify.app/'
	},
	{
		id: 7,
		image: IMG4,
		title: "Connect4",
		github: 'https://github.com/Milan-Sharma-449/Connect4-Core-JAVA-',
		demo: 'https://github.com/Milan-Sharma-449/Connect4-Core-JAVA-'
	},
	{
		id: 8,
		image: IMG7,
		title: "Sakila Film Project (HighRadius Internship)",
		github: 'https://github.com/Milan-Sharma-449/Hrc-Training-Sakila-'
	},
	{
		id: 9,
		image: IMG8,
		title: "AI-Enabled B2B Fin-Tech Management Dashboard for Accounts Receivables (HighRadius Corporate Internship)"
	},
	{
		id: 10,
		image: IMG6,
		title: "Personal Portfolio (Html / Css / Js)",
		github: 'https://github.com/Milan-Sharma-449/Personal-Portfolio',
		demo: 'https://milansharma-portfolio.000webhostapp.com/'
	},
	{
		id: 11,
		image: IMG9,
		title: "Online Code Editor"
	},
	{
		id: 12,
		image: IMG10,
		title: "Temperature App (Core Java)",
		github: 'https://github.com/Milan-Sharma-449/Temperature-App',
		demo: 'https://github.com/Milan-Sharma-449/Temperature-App'
	}
	]

const Portfolio = () => {
  return (
  <section id='portfolio' >
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container' >
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt="Chat App" />
            </div>
			<h3>{title}</h3>
			
            <div className='portfolio__item-cta' >
              <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >LiveDemo</a>
            </div>
          </article>
          )
        })
      }
    </div>

  </section>
  )
}

export default Portfolio