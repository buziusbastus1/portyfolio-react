import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'crypto currency',
    github: 'http://github.com',
    demo: 'http://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'chart templates',
    github: 'http://github.com',
    demo: 'http://dribbble.com'
  }
]
const portfolio = () => {
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
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target='_blank' rel="noreferrer">github </a>
                <a
                  href={demo}
                  target="blank"
                  className="btn btn__primary"
                > live demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default portfolio
