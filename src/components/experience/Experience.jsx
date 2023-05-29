import React, { useEffect, useRef } from 'react'
import './experience.css'
import { MdArrowForwardIos } from 'react-icons/md'
const experience = () => {
  const frontendRef = useRef(null)
  const backendRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const options = {
      threshold: 0.3
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (frontendRef.current) {
      observer.observe(frontendRef.current)
    }

    if (backendRef.current) {
      observer.observe(backendRef.current)
    }
    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <section id="experience">
       <div className="experience__titles" ref={titleRef}>
      <h5 ref={titleRef}>what skills i have</h5>
      <h2 ref={titleRef}>my experience</h2>
</div>
      <div className="container experience__container">
        <div ref={frontendRef} className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>React</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div><h4>CSS/SCSS</h4>
              </div>
            </article>

          <article className="experience__details">
            <MdArrowForwardIos className='experience__details-icon'/>
            <div>
              <h4>RWD</h4>

            </div>
          </article>
          <article className="experience__details">
            <MdArrowForwardIos className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>

            </div>
          </article>
          <article className="experience__details">
            <MdArrowForwardIos className='experience__details-icon'/>
            <div>
              <h4>Blender</h4>

            </div>
          </article>
        </div>
</div>
        <div ref={backendRef} className="experience__backend">
          <h3>Used Libraries</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon' />
              <div>
                <h4>GSAP</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>Three.js</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>React Router</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>Vitejs</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>EmailJS</h4>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
