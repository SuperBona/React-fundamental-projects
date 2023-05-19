import { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  /* 2 - 5 */
  /*  const [isChecked, setIsChecked] = useState(item.completed) */

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        /* 5 */
        /* checked={isChecked} */
        checked={item.completed}
        /* onChange={() => setIsChecked(!isChecked)} */
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          /* 5 */
          /* textDecoration: isChecked && 'line-through', */
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      {/* 4 */}
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem

// 1: imposto le checkbox, il name dell'item, e il delete btn
/* sulle checkbox voglio impostare l'attributo checked e voglio anche impostare onChange - quando clicco voglio 
mandare a display all'user che l'item è completato - inline style - se clicco su checkbox (item completed), riga nera sul testo */
/* non voglio impattare sullo state value */
// 2: creo state value per checkbox - potrei impostarlo su false, oppure legarlo all'item
// 3: imposto lo style per p
/* I'm going to go with text decoration and I'll say, if D is checked is true, then I want to set up the line through.
When it's false, once I click, I change the local value. I'm not changing anything globally. And notice right away user sees that item is completed */
/* torno in app */
// 4: imposto removeitem
/* ritorno in app */
// 5: rimuovo lo state value, e in checked={} imposto item.completed, che di default è false; al posto di onChange=>setIsChecked, passo item id
//e lo modifico anche in textDecoration
/* vado in Main */
