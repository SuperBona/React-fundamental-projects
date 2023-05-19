import { useState } from 'react'

const Form = ({ addColor }) => {
  /* 1 */
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    /* 6 */
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className='container'>
      <h4>color generator</h4>

      {/* 2 */}
      <form className='color-form' onSubmit={handleSubmit}>
        {/* 5 */}
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          /* 3 */
          placeholder='#8980F5'
        />

        {/* 4 */}
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  )
}
export default Form

/* qui creo un valore che controllo attraverso gli input -> controlled inputs */
// 1: come default value per color metto una stringa vuota, poi passo l'event submit
// 2: imposto il form - attenzione a come è scritto onChange, ricordo onSubmit
// 3: imposto un placeholder con quanto volgio mostrare al primo rendering
// 4: per il btn, quando l'utente seleziona un colore, il btn prende quel colore: uso lo style
// 5: inserisco il color input - se clicco posso selezionare un colore, anche se lo digito in hex
/* imposto valuejs library, responsible for generating colors -> npm i values.js (stoppo il server prima di farlo) */
// devo impostare il generatore di colori con all method per generare un tot di shades che voglio, di uno specifico valore (l'input)
/* vado in app */
// 6: creo funzione per generare colori
/* ritorno in app */
