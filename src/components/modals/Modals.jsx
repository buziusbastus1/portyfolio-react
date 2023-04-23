import React from 'react'
import './modals.css'
const Modal = ({ title, content, onClose, img }) => {
  return (
    <>
    <div className="modal__background"></div>
    <div className="modal">
        <div className='modhead'>
        <h3>{title}</h3>
        <button className="modal__close" onClick={onClose}>&times;</button>
        </div>
      <div className="modal__content">
        <p>{content}</p>

           <div className="modal__image-wrapper">
          <img src={img} alt={title} />
          <img src={img} alt={title} />
             <p>{content}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modal
