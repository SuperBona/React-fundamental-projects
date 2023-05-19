import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'

/* 8 */
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  /*  console.log(list) */
  /* 9 */
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
  return list
}

/* 7 */
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  /* 8 */
  /*  getLocalStorage() */

  /* 1 - 8 */
  const [items, setItems] = useState(getLocalStorage())

  /* 2 */
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    /* 7 */
    const newItems = [...items, newItem]
    /* 3 */
    setItems([...items, newItem])
    /* 7 */
    setLocalStorage(newItems)
    /* 14 */
    toast.success('item added to the list')
  }

  /* 4 - 6 */
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    /* 7 */
    setLocalStorage(newItems)
    /* 14 */
    toast.success('item deleted')
  }

  /* 9 */
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        /* 10 */
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    /* 11 */
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className='section-center'>
      {/* 13 */}
      <ToastContainer position='top-center'></ToastContainer>
      {/* 4 */}
      <Form addItem={addItem}></Form>
      {/* 12 */}
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
    </section>
  )
}

export default App

/* dovrei iniziare impostando uno state value per i list items, quindi servirà una funzionalità per aggiungere items alla lista,
rimuoverli e modificarli, ecco perchè serve lo state value. Servirà poi value, onChange, uno state value nel form...
quando l'utente digita un valore nel form, questo verrà salvato nel form e inserito nella lista */

// 1: creo un component, form component, e qui in app imposto lo state value per gli items, poi imposto il return
/* nel return ho gli items components e toast-container */
//ora vado in form component
// 2: addItem function - per aggiungere items alla list. potrei creare item component, single item component e iterate over, ma non funzionerebbe perchè ho un empty array come state value
/* prendo name property dal form -> l'unica cosa dinamica è il name che proviene dal form, e id unico */
// 3: aggiungo l'item alla list; So we'll call the set items. We'll spread out the current ones since we'll be always adding to the list we don't want to overwrite.
//di default inizio con una list di items, e con una list mi serve un unique key e id, e name
// 4: passo add item a form, dove andrò a invoke it
//torno a form e destructure it
// 5: imposto la funzione per remove item
//inserisco la component items nel return e ci passo gli items e remove items
/* vado su items.jsx */
// 6: removeItem, imposto la funzione attraverso item.id e creo un nuovo array
/* ritorno in singleitem */
/* 7: voglio salvare la list in local storage così rimangono quando refresh la pagina - servono setItem in cui passo la key e il valure;
per accedere all'item, getItem e passo la key
localstorage passa solo le strings, quindi devo passare json.parse oer riavere l'item 
localStorage.setItem(key, value)
setLocalStorage(newItems) -> whatever items I'm passing here as new items, the same ones I want to pass into a set local storage -> overwriting the value costantly 
anche se ricarico la pagina, il local storage tiene i dati; voglio tenerli a schermo anche se ricarico */
// 8: getItem -> per riprendere gli items dal local storage, ma prima voglio controllare se l'item c'è o no
/* dato che list del localstorage è una string, devo usare json.parse; se faccio parse un valore null, da errore */
/* once we refresh, I still have those values because now we have a getLocalStorage which sets our default value equal to whatever we have in the local storage or an empty array. */
/* posso scrivere tutto in un'unica linea per la questione local storage
const defaultList = JSON.parse(localStorage.getItem('list') || '[]')
e poi in const [items, setItems] = useState(defaultList)
*/
// 9: ora imposto edit item - if item ID is equal to the item ID we're passing in, we'll do something. However, if it's not the case, well, then we'll simply go with item.
/* every time we click over here, we just want to flip that value. So by default, it's going to be false.
And then as we start clicking on that checkbox, we'll just be flipping from true to false, false to true.
10: And in order to set it up, we'll create a new object. We want to copy the existing values and essentially create a new one. -> creo un'instance */
//11: voglio impostare state value e salvarlo in local storage
//12: inserisco la funzione nel return e nel component items, lo aggiungo anche in singleItem e lì vado a modificare delle cose
//13: imposto toast container; potrei impostare la logic anche nel Form, ma faccio qui
//14: imposto gli alert
/* vado su form */
