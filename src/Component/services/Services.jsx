import React from 'react'
import './services.css'
import s1 from '../../service/service-1.svg'
import s2 from '../../service/service-2.svg'
import s3 from '../../service/service-3.svg'
import s4 from '../../service/service-4.svg'

const Services = () => {
  return (
    <section id='services' >
      <h5>What I offer</h5>
      <h2>My Awesome Services</h2>
      <div className='container service__container'>
        <div className='service__card' >
          <img src={s3} alt='sevice' className='card' />
          <h2>Web Development</h2>
        </div>
        <div className='service__card' >
          <img src={s1} alt='sevice' className='card' />
          <h2>C/C++ Development</h2>
        </div>
        <div className='service__card' >
          <img src={s2} alt='sevice' className='card' />
          <h2>Database Engineer</h2>
        </div>
        <div className='service__card' >
          <img src={s3} alt='sevice' className='card' />
          <h2>Java Development</h2>
        </div>
        <div className='service__card' >
          <img src={s3} alt='sevice' className='card' />
          <h2>Mobile App Development</h2>
        </div>
        <div className='service__card' >
          <img src={s4} alt='sevice' className='card' />
          <h2>Leadership</h2>
        </div>
      </div>
    </section>
  )
}

export default Services