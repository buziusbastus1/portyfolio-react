import React from 'react'
import './modals.css'
const Modal = ({ title, content, onClose, img }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <h3>{title}</h3>
        <p>{content}</p>
           <div className="modal__image-wrapper">
          <img src={img} alt={title} />
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
