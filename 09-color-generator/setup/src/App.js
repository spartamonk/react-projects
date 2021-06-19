import React from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import FetchColors from './FetchColors'
function App() {
  const {color, setColor, colorList, isError, handleSubmit} = FetchColors(Values)
  
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form action='' onSubmit={handleSubmit}>
          <input type='text' placeholder='#f15025' value={color} onChange={e=>setColor(e.target.value)} className={`${isError? 'error': 'null'}`} />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
      {
        colorList.map((color, index)=> {
          const {hex} = color
          return <SingleColor key={index} {...color} index={index} hex={hex} />
        })
      }
      </section>
    </>
  )
}

export default App
