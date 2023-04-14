import React from 'react'
import './services.css'
import { BsCheck2 } from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>what I offer</h5>
      <h2>services</h2>
      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>ui/ux design</h3>

          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>web development</h3>

          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> impedit ut. Maiores commodi odio sapiente nemo?</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
