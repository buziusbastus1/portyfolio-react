import React, { useState, useEffect } from 'react'
import './header.css'
import { images } from '../modals/ModalsData'

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const imageKeys = Object.keys(images)
  const length = imageKeys.length

  const handlePrev = () => {
    setImageIndex((imageIndex - 1 + length) % length)
  }

  const handleNext = () => {
    setImageIndex((imageIndex + 1) % length)
  }

  const handleDotClick = (index) => {
    setImageIndex(index)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((imageIndex + 1) % length)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [imageIndex, length])

  return (
    <div className="header__slideshow">
      <div className='slider__arrows' >
      <div className="slider__prev" onClick={handlePrev}>
        {length > 0 && (
          <img
            src={images[imageKeys[(imageIndex - 1 + length) % length]]}
            alt="Previous Screenshot"
            className="slider__image slider__image--prev"
          />
        )}
      </div>
      <div className="slider__next" onClick={handleNext}>
        {length > 0 && (
          <img
            src={images[imageKeys[(imageIndex + 1) % length]]}
            alt="Next Screenshot"
            className="slider__image slider__image--next"
          />
        )}
      </div>
      </div>
      {length > 0 && (
        <img
          src={images[imageKeys[imageIndex]]}
          alt="Project Screenshot"
          className="slider__image slider__image--main"
        />
      )}
      <div className="slider__dots">
        {imageKeys.map((key, index) => (
          <span
            key={key}
            className={index === imageIndex ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
export default Slider
