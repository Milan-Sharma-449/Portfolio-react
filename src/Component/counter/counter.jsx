import React, { useState } from 'react'
import './counter.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import {BsCheck2, BsJournalRichtext, BsAward} from 'react-icons/bs'
import { MdOutlineMapsHomeWork } from 'react-icons/md'

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <section>
      <div className="section-counter paralax-mf bg-image">
      <div className="overlay-mf"></div>
      <div className="container1">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><BsCheck2 className='icon'/></span>
              </div>
              <div className="counter-num">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                    <div>
                        <h4>
                        {counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}
                        +
                        </h4>
                    </div>
                </ScrollTrigger>
                <span className="counter-text">PERSONAL PROJECTS</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
            <div className="counter-ico">
                <span className="ico-circle"><BsJournalRichtext className='icon'/></span>
              </div>
              <div className="counter-num">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                    <div>
                        <h4>
                        {counterOn && <CountUp start={0} end={30000} duration={4} delay={0} />}
                        +
                        </h4>
                    </div>
                </ScrollTrigger>
                <span className="counter-text">TOTAL LINES OF CODE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
            <div className="counter-ico">
                <span className="ico-circle"><BsAward className='icon'/></span>
              </div>
              <div className="counter-num">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                    <div>
                        <h4>
                        {counterOn && <CountUp start={0} end={6} duration={4} delay={0} />}
                        
                        </h4>
                    </div>
                </ScrollTrigger>
                <span className="counter-text">TRAININGS DONE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
            <div className="counter-ico">
                <span className="ico-circle"><MdOutlineMapsHomeWork className='icon'/></span>
              </div>
              <div className="counter-num">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                    <div>
                        <h4>
                        {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
                        +
                        </h4>
                    </div>
                </ScrollTrigger>
                <span className="counter-text">WORK EXPERIENCE<br/>in months</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </section>
  )
}

export default Counter