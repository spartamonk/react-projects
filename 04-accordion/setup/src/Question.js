import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info, title}) => {
  const [displayAnswer, setDisplayAnswer]= useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=> setDisplayAnswer(!displayAnswer)}>
        {
          displayAnswer? <AiOutlineMinus /> : <AiOutlinePlus />
        }
        </button>
      </header>
      {
        displayAnswer && <p>{info}</p>
      }
    </article>
  );
};

export default Question;
