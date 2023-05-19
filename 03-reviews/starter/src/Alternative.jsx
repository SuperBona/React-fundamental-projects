import { useState } from 'react'
//posso chiamare people qua sotto come voglio, basta che uso quella parola quando devo usarla
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  /* 1 */
  const [index, setIndex] = useState(0)
  /* 2 */
  const { name, job, image, text } = people[index]
  /* console.log(name) */

  /* 6 - secondo metodo */
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  /* 4 - 5 */
  const nextPerson = () => {
    /* (index prima dell'update) => {come si deve aggiornare} - ricordo return */
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      /* 6 - primo metodo tutto qui */
      /*  if (newIndex > people.length - 1) {
        return 0
      } */
      /*  return newIndex */
      return checkNumber(newIndex)
    })
  }

  /* 4 -5 */
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      /* 6 - primo metodo tutto qui */
      /* if (newIndex < 0) {
        return people.length - 1
      } */
      /*  return newIndex */
      return checkNumber(newIndex)
    })
  }

  /* 7 */
  const randomPerson = () => {
    /*   console.log(Math.random()) */
    let randomNumber = Math.floor(Math.random() * people.length)
    /* console.log(randomNumber) */
    //evito ripetizioni
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
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
        {/* 4 */}
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
        {/* 7 */}
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App

//inizio da qui, importo people dal file data
// 1: setup state value - array inizia con 0, io voglio partire col primo item, quindi 0
// 2: destructuring -voglio mettere a display una persona per volta. Voglio accedere a people, index è il valore che andrà a cambiare
// installo React icons library con -> npm install react-icons --save
// 3: render first person
// 4: piazzo i btn
// 5: assegno la funzione ai btn, se è 0 diventa 1, - 2 , ecc, e così al contrario. Update state -> re-render
// quando supero l'ultimo item o vado indietro rispetto al primo (4+1, 0-1) l'app non va più perchè non c'è nulla dopo, no person that match index
// ci sono più soluzioni
// 6: if the new index is bigger than the last index in the array, instead of returning, that new index actually could return zero (ricordo length - 1 perchè sto con un array)
// stessa cosa con il prev btn
// 7: random person - Math.random() crea un numero random da 0 a 1; devo impostarlo da 0 a 3 per l'array
// Math.floor(Math.random() * people.length)

// !Guardo l'App.jsx approach con i module operators - stesse funzioni, meno codici
