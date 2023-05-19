import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)
  /* console.log(people) */
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}
export default App

//we want to render the list. Basically, we want to iterate over and display the image and rest of the info.
//create 2 components, list (to iterate over) and person

/* invoke setPeople in oneClick, e dato che voglio cancellare gli elementi della lista, imposto
setPeople come array vuoto, ciò che mi deve tornare se clicco il btn. 
al click succede che => prendo la funzione setPeople, che contiene la lista, ([]) si svuota
*/
