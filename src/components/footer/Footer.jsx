import React, { useRef, useEffect } from 'react'
import observeIntersection from '../../intersectionObserver'
import './footer.css'

const footer = () => {
  const fadeRefs = useRef([])

  useEffect(() => {
    const options = {
      threshold: 0.8
    }

    fadeRefs.current.forEach((ref, index) => {
      const observer = observeIntersection(ref, options)
      observer.observe(ref)
      ref.style.transitionDelay = `${index * 0.1}s`
      return () => {
        observer.disconnect()
      }
    })
  }, [])
  return (
    <footer>
        <ul className='permalinks'>

        {/* <li><a href="#">home</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">contact</a></li> */}
         <li ref={(el) => (fadeRefs.current[0] = el)}>
          <a href="#">home</a>
        </li>
        <li ref={(el) => (fadeRefs.current[1] = el)}>
          <a href="#experience">experience</a>
        </li>
        <li ref={(el) => (fadeRefs.current[2] = el)}>
          <a href="#portfolio">portfolio</a>
        </li>
        <li ref={(el) => (fadeRefs.current[3] = el)}>
          <a href="#contact">contact</a>
        </li>

      </ul>

    </footer>
  )
}

export default footer
