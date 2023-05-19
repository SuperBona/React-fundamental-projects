import SingleItem from './SingleItem'

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {/* 1 */}
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          ></SingleItem>
        )
      })}
    </div>
  )
}
export default Items

// 1: iterate over the list
/* So we'll say items dot map. Each and every item I'll reference as an item.
And then when it comes to return, we want to go with single item. So for every item, we will return that component. */
/* passo tutto come un item e removeItem=removeItem perchè ogni item avrà un suo remove button */
/* ora devo solo impostare il return e la funzione per SingleItem, ovvero il valore del form messo a display nella list */
