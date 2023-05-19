import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  /* 1 */
  const [colors, setColors] = useState(new Values('#8980F5').all(10))
  /* console.log(new Values('#f15025').all(10)) */

  /*   toast.error('error')
  toast.success('success') */

  /* 3 */
  const addColor = (color) => {
    /*  console.log(color) */
    /* 4 */
    try {
      let newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      /* console.log(error.message) */
      toast.error(error.message)
    }
  }

  return (
    <main>
      {/* 3 */}
      <Form addColor={addColor}></Form>
      {/* 2 */}
      <ColorList colors={colors}></ColorList>
      <ToastContainer position='top-center'></ToastContainer>
    </main>
  )
}
export default App

//inizio a lavorare nel form, il component per selezionare il colore
// 1: importo values e creo un nuovo state value come array vuoto, il log è per vedere che succederebbe se avessi quel colore
/* ho un array di 21 items (le sfumature di quel colore) */
/* voglio impostare come state value un colore, che verrà mostrato al primo rendering */
/* per metterlo a display, devo iterate over e display each color */
// 2: imposto ColorList e poi vado in quel component

/* imposto toast container, per creare gli alert */

// 3: imposto funzione per generare i colori a partire da quello dell'input
/* vado in form per creare la funzione */
/* 4: considero che l'user potrebbe mettere invalid color */

/* ricordo, in .all(numero) imposto di quanto deve incrementare la percentuale shades, di 10% per ogni shade */
/* voglio anche impostare un modo per far sì che l'user possa copiare l'hex color di una shade che vuole. vado in single color */
