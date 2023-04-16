import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>CSS/SCSS</h4>
              <small className="text-light">experienced</small></div>
            </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>RWD</h4>
              <small className="text-light">experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>English</h4>
              <small className="text-light">experienced</small>
            </div>
          </article>
        </div>
</div>
        <div className="experience__backend">
          <h3>Used Libraries</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GSAP</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Three.js</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React Router</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>python</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>tailwinddb</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
