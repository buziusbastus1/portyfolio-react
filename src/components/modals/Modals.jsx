import React from 'react'
import './modals.css'
const Modal = ({ title, content, onClose, img }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>&times;</button>
        <h3>{title}</h3>
        <p>{content}</p>
           <div className="modal__image-wrapper">
          <img src={img} alt={title} />
          <img src={img} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default Modal
