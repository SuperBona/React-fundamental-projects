import CartItem from './CartItem'
import { useGlobalContext } from './context'
import cartItems from './data'
const CartContainer = () => {
  /* 1 - 3 */
  const { cart, clearCart, totalCost } = useGlobalContext()
  const cartArray = Array.from(cart.entries())
  /* const cartArray = [...cartItems] questo non serve più perchè non uso più i dati direttamente dal file */

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}

      {/* 2 */}
      <div>
        {cartArray.map((cartItem) => {
          /* console.log(cartItem) */
          const [id, item] = cartItem
          return <CartItem key={id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>

        {/* 3 */}
        <button
          className='btn btn-hipster'
          /* onClick={() => console.log('clear cart')} */
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer

// 1: qui uso useGlobalContext. Passo cart, e lo imposto uguale a useGlobalContext. Devo poi usare in cartArray: Array.from e passare le voci del cart per ottenere l'array in modo da poterlo iterare.
/* qui return cart ed entries perchè c'è anche un valore e un key value. Array.from lo rende un array */
// 2: dato che so che sto passando un array e ci sono due valori, posso destructure
/* ora devo impostare le actions; vado in context.jsx */
// 3: inserisco la clearCart functin nel useGlobalContext e la passo in the reference in btn onClick direttamente, dato che non ho alcun parametro
/* ora faccio removeItem, torno in context */
/* qui imposto totalCost (totalAmount sta in navbar.jsx) */
/* torno in utils */
/* imposto toFixed per totalCost nell'h5 cart-total e indico quanti items voglio (2) dopo il punto del decimale (quindi due decimali) */
/* ora voglio impostare Loading, quindi torno in context.jsx */
