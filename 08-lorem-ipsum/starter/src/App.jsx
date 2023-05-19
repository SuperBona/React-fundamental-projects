import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  /* 1 */
  const [count, setCount] = useState(1)
  /* 5 */
  const [text, setText] = useState([])
  /* 6 */
  const handleSubmit = (e) => {
    e.preventDefault()
    /* console.log(count) */
    /* console.log(1); */
    /* console.log(typeof count) */ //anche se l'input è un numero, in console mi torna una string. devo usare parse int
    let amount = parseInt(count) //come result, amount diventa number

    /* 7 - slice(dove voglio iniziare? dove voglio concludere?) */
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>

      {/* 2 */}
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        {/* 3 */}
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      {/* 8 */}
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  )
}
export default App

// 1: nel data.js ho un array. imposto come defaul useState 1, ovvero vedo il num 1, e il return
// 2: imposto il form, lascio stare action
// 3: imposto min e max number per selezionare il numero di paragrafi, e lo step (di quanto aumento?)
// 4: li imposto come controlled input, quindi fornisco un value e onChange
// 5: importo i data e metto lo state value come empty array perchè di default non voglio vedere niente
// 6: creo la funzione per il submit e imposto il count (il numero di paragrafi deve generare quel numero di paragrafi)
// 7: prendo i data, uso slice method su questi, e ottengo gli items dell'array in base al count value
// 8: imposto il return

/* un'altra libreria per generare unique id -> nanoid - per installare: npm i nanoid e import */
/* genera un random id di 21 caratteri; lo metto nel key del return e invoke */
/* comando clear nel termina - pulisce il terminal */
