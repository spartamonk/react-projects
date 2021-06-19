import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [paragraphs, setParagraphs] = useState([]); 
  const handleSubmit =e=> {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <=1) {
      amount = 1 
    } else if(count >=9) {
      amount = 9
    }
    setParagraphs(data.slice(0, amount))
  }

  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form action="" className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name="amount" id="amount" value={count} onChange={e=> setCount(e.target.value)} />
      <button className="btn" type="submit">generate</button>
    </form>
    <article className="lorem-text">
      {
        paragraphs.map((paragraph, index)=> {
          return (
            <p key={index}>{paragraph}</p>
          )
        })
      }
    </article>
  </section>
    )
}

export default App;
