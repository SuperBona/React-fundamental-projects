import { useState } from 'react'
import Title from './Title'
import Menu from './Menu'
import menu from './data'
import Categories from './Categories'

/* 5 */
//const tempCategories = menu.map((item) => item.category)
/* console.log(tempCategories) */

/* 6 */
//const tempSet = new Set(tempCategories)
/* console.log(tempSet) */

/* 7 */
//const tempItems = ['all', ...tempSet]
/* console.log(tempItems) */

/* 8 - tutto in un'unica riga */
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  /* 3 */
  const [menuItems, setMenuItems] = useState(menu)

  /* 9 */
  const [categories, setCategories] = useState(allCategories)
  /* console.log(categories) */

  /* 11 */
  const filterItems = (category) => {
    /* console.log(category) */
    /* 15 */
    if (category === 'all') {
      setMenuItems(menu)
      return
    }

    /* 13 */
    const newItems = menu.filter((item) => item.category === category)

    /* 14 */
    setMenuItems(newItems)
  }

  /* 1 */
  return (
    <main>
      <section className='menu'>
        {/* 2 */}
        <Title text='our menu'></Title>

        {/* 10 - 12 */}
        <Categories
          categories={categories}
          filterItems={filterItems}
        ></Categories>

        {/* 4 */}
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}
export default App

// 1: creo Title.jsx e qui imposto il return con title
//ora vado su title.jsx
// 2: imposto un title specifico per la section menu (dato che ora mi ritorna 'Default Title')
// 3: imposto lo useState
// ora creo le due components (menu -> iterate over data; menuItem -> display properties)
// 4: importo Menu ->  I'm going to be passing them down the menu items.
//torno su menu
// 5: map sugli items del menu, voglio return dell'item-category - per ogni (item) del menu, voglio la => category
// 6: prendo le unique categories con new Set() e all'interno passo tempCAtegories, ovvero gli id degli items del menu
//ora questi valori vanno trasformati in array,
// 7: posso usare gli spread operators -> ['all'] significa che voglio a display tutti gli items
// 8: !!! posso mettere tutto su un'unica riga!
// 9: imposto state value
//creo il nuovo component, Categories.jsx
//10: return categories - categories prop is equal to a categories value.
//vado su Categories
//11: filter items, sarà una funzione a cui accedo a category
//12: devo accedere a category
//ora torno in category per accedere alla function
//13: uso filter (based on category value) per impostare la funzionalità
/* qui prendo il menu, l'array originale.
Then let's call filter method on each and every item.
I'll reference as an item and then I'll say: if the item category matches, then return. */
/* questo è un concetto differente da quello fatto fino ad ora (So usually we were removing the item from the array and then we said, well, 
if the ID or whatever doesn't match, then return.) */
//14: ora che ho i nuovi items, imposto setMenuItems
/* il btn all non funziona, perchè non c'è alcun item con la category all */
//15: If the parameter that you provided is equal to all, here's what I want to do. I want to set it back to default. What is the default over here? Menu.
