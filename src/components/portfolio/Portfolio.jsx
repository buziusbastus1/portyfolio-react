import React, { useState, useRef, useEffect } from 'react'
import Modal from '../modals/Modals'
import { data } from '../modals/ModalsData'
import observeIntersection from '../../intersectionObserver'
import './portfolio.css'

const portfolio = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (id) => {
    setActiveModal(id)
    document.documentElement.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.documentElement.style.overflow = 'auto'
  }

  const portfolioItemsRefs = useRef([])

  useEffect(() => {
    portfolioItemsRefs.current.forEach((ref, index) => {
      const options = {
        root: null,
        threshold: 0.5
      }

      const observer = observeIntersection(ref, options)
      observer.customIndex = index // Store the index in the observer instance

      return () => {
        observer.unobserve(ref.current)
      }
    })
  }, [])
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>porfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({ id, image, title, github, demo }, index) => {
          const ref = useRef(null)
          portfolioItemsRefs.current[index] = ref // Store the ref in the array
          const isEven = index % 2 === 0
          const articleClassName = `portfolio__item ${isEven ? 'even' : 'odd'}`

          return (
            <article
            key={id}
            // className="portfolio__item"
             className={articleClassName}
            ref={ref}>

              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta" >
                <a href={github} className="btn" target='_blank' rel="noreferrer">github </a>
                <a href={demo}target="blank"className="btn btn__primary"> live demo</a>
                 <a onClick={() => openModal(id)} className="btn btn__primary">
                learn more
              </a>
              </div>
            </article>
          )
        })}
      </div>
           {/* Modal 1 */}
      {activeModal === 1 && (
        <Modal
          title={data[0].title}
          content={data[0].modalContent}
          modalImage={data[0].modalImage}
          technologies={data[0].technologies}
          onClose={closeModal}
        />
      )}

      {/* Modal 2 */}
      {activeModal === 2 && (
        <Modal
          title={data[1].title}
          content={data[1].modalContent}
          modalImage={data[1].modalImage}
          technologies={data[1].technologies}
          onClose={closeModal}
        />
      )}

    </section>
  )
}

export default portfolio
