import React from 'react'
import Nav from './Component/nav/Nav'
import NavBar from './Component/nav/NavBar'
import Header from './Component/header/Header'
import About from './Component/about/About'
import Experience from './Component/experience/Experience'
import Services from './Component/services/Services'
import Counter from './Component/counter/counter'
import Portfolio from './Component/portfolio/Portfolio'
import Testimonials from './Component/testimonials/Testimonials'
import Contact from './Component/contact/Contact'
import Footer from './Component/footer/Footer'

const App = () => {
  return (
    <>
        <NavBar />
        <Nav />
        <Header />
        <About />
        <Experience />
        <Services />
        <Counter />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App