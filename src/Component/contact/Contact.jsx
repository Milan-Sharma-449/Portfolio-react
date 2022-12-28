import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jkejt4p', 'template_679x4zv', form.current, 'JWqV8bpPMMHQwykO-')
    e.target.reset()
  };

  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className='gmaps' >
      <iframe title='maps' className="gmap_iframe" width="50%" height="400px"  src="https://maps.google.com/maps?width=600&amp;height=1200&amp;hl=en&amp;q=Mathura&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div className='container contact__container'>
       <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>milansharma449@gmail.com</h5>
            <a href='mailto:milansharma449@gmail.com' target='_blank' rel="noreferrer" >Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Milan Sharma</h5>
            <a href='https://m.me/milan.sharma.980315' target='_blank' rel="noreferrer" >Send a message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Whats App</h4>
            <h5>+9170 6087 3017</h5>
            <a href='https://api.whatsapp.com/send?phone=917060873017' target='_blank' rel="noreferrer" >Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact