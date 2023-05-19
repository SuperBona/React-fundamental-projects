import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  /* 1 */
  const [newItemName, setNewItemName] = useState('')
  /* 4 */
  const handleSubmit = (e) => {
    e.preventDefault()
    /* console.log(newItemName) */
    /* 5 - 6*/
    if (!newItemName) {
      toast.error('please provide a value')
      return
    }
    addItem(newItemName)
    setNewItemName('')
  }

  return (
    /* 4 */
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        {/* 2 */}
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />

        {/* 3 */}
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  )
}
export default Form

// 1: inizio con uno state value per quando si digita nel form
// 2: lavoro con il controlled input, ricordo cosa devo inserire
// 3: btn
// 4: imposto una struttura per handleSubmit
//torno in app
// 5: prima di aggiungere un item alla list, voglio controllare se c'è qualche valore scritto, altrimenti non faccio aggiungere un item vuoto
/* se invece ho un valore, lo aggiungo alla lista - only looking at the name */
//imposto anche la funzione per ripulire il form dal valore scritto quando faccio submit
/* render items - creo nuova component, items.jsx e creo anche SingleItem.jsx, ma torno a lavorare su app */
// 6: imposto gli alert
