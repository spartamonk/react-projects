import React, { useState, useEffect } from 'react'

import data from './data'
import Title from './Title'
import Review from './Review'

function App() {
  const [reviews, setReviews] = useState(data)
  const [indexPosition, setIndexPosition] = useState(1)
  const checkIndex = (number) => {
    if (number < 0) {
      number = reviews.length - 1
    } else if (number > reviews.length - 1) {
      number = 0
    }
    return number
  }

  const nextReview = () => {
    setIndexPosition((currPosition) => {
      return checkIndex(currPosition + 1)
    })
  }
  const prevReview = () => {
    setIndexPosition((currPosition) => {
      return checkIndex(currPosition - 1)
    })
  }
  useEffect(()=> {
    const interval = setInterval(()=> {
      prevReview();
    }, 3000)
    return ()=> clearInterval(interval)
  }, [indexPosition])
  return (
    <section className='section'>
      <Title />
      <Review
        reviews={reviews}
        indexPosition={indexPosition}
        nextReview={nextReview}
        prevReview={prevReview}
      />
    </section>
  )
}

export default App
