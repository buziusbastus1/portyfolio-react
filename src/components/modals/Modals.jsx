import React, { useState } from 'react'
import './modals.css'
const Modal = ({ title, content, technologies, onClose, modalImage }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1) // initially no image is selected

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  const handleImageClose = () => {
    setSelectedImageIndex(-1) // reset the selected index to close the zoomed-in image
  }

  return (
    <>
      <div className="modal__background"></div>
      <div className="modal">
        <div className='modhead'>
          <h2>{title}</h2>
          <button className="modal__close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal__content">

          <h3>📸 Screenshots</h3>
          <div className="modal__image-wrapper">
            {modalImage.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={title}
                onClick={() => handleImageClick(index)}
                className={selectedImageIndex === index ? 'zoomed-in' : ''}
              />
            ))}
          </div>
          <h3>📖 Description</h3>
  <p className='desc' dangerouslySetInnerHTML={{ __html: content }}></p>
<h3>🖥️ Technologies</h3>
 <ul className='list' dangerouslySetInnerHTML={{ __html: technologies }}></ul>
        </div>
        {selectedImageIndex >= 0 && (
          <div className="modal__zoomed-image-wrapper" onClick={handleImageClose}>
            <img src={modalImage[selectedImageIndex]} alt={title} className="zoom" />
          </div>
        )}
      </div>
    </>
  )
}

export default Modal
