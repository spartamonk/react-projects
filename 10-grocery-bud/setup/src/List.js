import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ name, id, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      <article className='grocery-item'>
        <p className='title'>{name}</p>
        <div className='btn-container'>
          <button className='edit-btn' type='button' onClick={() => editItem(id)}>
            <FaEdit />
          </button>
          <button
            className='delete-btn'
            type='button'
            onClick={() => removeItem(id)}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    </div>
  )
}

export default List
