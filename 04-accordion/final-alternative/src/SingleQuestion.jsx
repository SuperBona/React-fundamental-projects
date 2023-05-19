import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion

/* we're not going to display anymore based on the local state value since we only want to display one question at a time.
this needs to depend on the state value coming from the app. 
this is the case where we don't actually need a state anymore because we're not going to control it. */

// const isActive = id === activeId; -> checking the id - ricordo che activeId è null al momento
//al momento tutte stanno su false perchè activeID è null, non c'è alcun valore
