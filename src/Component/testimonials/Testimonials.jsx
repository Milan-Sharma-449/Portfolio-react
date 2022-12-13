import React from 'react'
import './testimonials.css'

const data = [
  {
    id: 1,
    title: 'Anubhav Dutta',
    designation: 'SDE-3 HighRadius Corporate',
    quote: 'Milan is a great co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <div className='.container testimonials__container' >
      {
      data.map(({id, title, designation, quote}) => {
        return (
          <article key={id} className='testimonial'>
          <h4>{title}</h4>
          <h6>{designation}</h6>
          <small className='review'>{quote}</small>
        </article>
        )
      })
    }
      </div>
    </section>
  )
}

export default Testimonials