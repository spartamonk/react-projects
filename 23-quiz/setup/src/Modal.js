import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { correct, questions, closeModal, isModalOpen } = useGlobalContext()
  return (
    <div className={`modal-container ${isModalOpen && 'isOpen'} `}>
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>you answered {((correct/questions.length) * 100).toFixed(0)}% of questions correctly</p>
        <button className='close-btn' onClick={closeModal}>play again</button>
      </div>
    </div>
  )
}

export default Modal
