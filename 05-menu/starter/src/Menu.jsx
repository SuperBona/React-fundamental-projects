import MenuItem from './MenuItem'

/* 1 */
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {/* 2 */}
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem}></MenuItem>
      })}
    </div>
  )
}
export default Menu

// 1: accedo agli items e iterate over
//creo la seconda component MenuItem
// 2: voglio iterare over menuItem
/* Each and every item will reference as menu item. And then in each iteration, effectively I want to return that menu item component.
Let's remember that we do need to pass-in the key. Especially in this case because we are actually doing some filtering and all that. */
//torno a menu item
