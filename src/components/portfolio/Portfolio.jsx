import React, { useState } from 'react'
import Modal from '../modals/Modals'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'crypto currency',
    github: 'http://github.com',
    demo: 'http://dribbble.com',
    modalContent: 'Modal conten for chart templatesModal conten for chart templatesModal conten for chart templatesModal conten for chart templatesModal conten for chart templatesModal conten for chart templates',
    modalImage: IMG1
  },
  {
    id: 2,
    image: IMG2,
    title: 'chart templates',
    github: 'http://github.com',
    demo: 'http://dribbble.com',
    modalContent: 'Modal conten for chart asda',
    modalImage: IMG2
  }
]
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
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>porfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta" style={{ justifyContent: 'left', gap: '10px', display: 'flex' }}>
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
          img={data[0].modalImage}
          onClose={closeModal}
        />
      )}

      {/* Modal 2 */}
      {activeModal === 2 && (
        <Modal
          title={data[1].title}
          content={data[1].modalContent}
          img={data[1].modalImage}
          onClose={closeModal}
        />
      )}

    </section>
  )
}

export default portfolio