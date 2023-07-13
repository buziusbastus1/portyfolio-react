import React, { useEffect, useRef } from 'react'
import { MdArrowForwardIos } from 'react-icons/md/'
import observeIntersection from '../../intersectionObserver'
import './experience.css'

const experience = () => {
  const frontendRef = useRef(null)
  const backendRef = useRef(null)

  useEffect(() => {
    const options = {
      threshold: 0.3
    }

    const frontendObserver = observeIntersection(frontendRef, options)
    const backendObserver = observeIntersection(backendRef, options)

    return () => {
      frontendObserver.disconnect()
      backendObserver.disconnect()
    }
  }, [])
  return (
    <section id="experience">
      <h5 >what skills i have</h5>
      <h2 >my experience</h2>
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
                <h4>TypeScript</h4>

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
              <h4>React.js</h4>

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
              <h4>RWD</h4>

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
                <h4>Three.js</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>Next.js</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>GSAP</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>Prisma</h4>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
