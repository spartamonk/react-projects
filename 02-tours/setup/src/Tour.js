import React, { useState } from 'react';

const Tour = ({ name, info, image, price,id, removeTour }) => {
  const [isShowReadMore, setIsShowReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {!isShowReadMore ? info : `${info.substring(0, 200)}...`}
          <button type="button" onClick={()=> setIsShowReadMore(!isShowReadMore)}>{
            isShowReadMore? 'read more': 'show less'
          }</button>
        </p>
        <button
          type='button'
          className='delete-btn'
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour;
