/* 1 - 4 */
const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {/* 2 */}
      {categories.map((category) => {
        return (
          /* 5 */
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => filterItems(category)}
          >
            {/* 3 */}
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories

// 1: accedo alle categories - qui imposto i btn
// 2: voglio iterate over gli items dell'array categories
//per quanto riguarda le key, dato che non voglio usare l'index, e so che queste saranno uniche (unique categories), posso semplicemente passare il valore 'category'
/* alternative -> If you ever have some kind of list where you know that those strings are going to be unique, you can simply use those strings. */
//quando clicco il btn, filtro gli items per le loro unique categories
// 3: metto a display la category -> ovvreo i btn, automaticamente impostati su 'all' (che filtra tutto) e le altre
//ora dovrei impostare la funzionalità per i filtri, per i btn. torno in app
// 4: accedo alla function filterItems
// 5: imposto la funzione oneClick con il filtro - let's go with arrow function then filter items and we'll pass in that category which we're accessing in the button.
//ora ottengo i valori category in console quando clicco i btn
//ritorno su app
