import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
const Review = ({
  reviews,
  indexPosition,
  prevReview,
  nextReview,
}) => {
  return (
    <div className='section-center'>
      {reviews.map((review, index) => {
        let position = 'nextSlide'
        if (indexPosition === index) {
          position = 'activeSlide'
        } else if (
          (indexPosition === index - 1 || (index === 0 && indexPosition === reviews.length - 1))
        ) {
          position = 'lastSlide'
        }
        const { id, image, name, title, quote } = review
        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}
      <button className='prev' onClick={prevReview}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={nextReview}>
        <FiChevronRight />
      </button>
    </div>
  )
}

export default Review
