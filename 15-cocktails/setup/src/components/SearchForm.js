import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { handleInput } = useGlobalContext();
  const inputRef = React.useRef(null);

  React.useEffect(()=> {
    inputRef.current.focus();
  },[])
  
  const handleSubmit =(e)=> {
    e.preventDefault();
  }
  return (
    <section className='section search'>
      <form action='' className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            ref={inputRef}
            type='text'
            name='name'
            id='name'
            onChange={handleInput}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
