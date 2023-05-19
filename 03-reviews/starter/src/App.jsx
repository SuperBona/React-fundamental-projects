import { useState } from 'react'

import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)

  const { name, job, image, text } = people[index]

  /* 1 */
  /* console.log(1 % 4)
  console.log(2 % 4)
  console.log(3 % 4)
  console.log(4 % 4)
  console.log(10 % 4) */

  /* 2 */
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length
      return newIndex
    })
  }

  /* 2 */
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length
      return newIndex
    })
  }

  /* 3 */
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    const newIndex = randomNumber % people.length
    setIndex(newIndex)
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>

        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App

//uso approccio moduli -> %
// 1: uso un modulo - in console mi ritornano i valori messi sulla sinistra
/* 1 % 4 = 1 / 2 % 4 = 2 / 3 % 4 = 3 / 4 % 4 = 0 / 10 % 4 = 2 (=2 perchè in 10 il 4 ci sta 2 volte col resto di 2) -> si basano sull'array */

// 2: imposto la nuova funzionalità nei btn

// 3: con randomNumber posso ottenere solo numeri più alti dell'array
