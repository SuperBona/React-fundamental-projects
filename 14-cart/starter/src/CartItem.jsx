import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useGlobalContext } from './context'
const CartItem = ({ id, img, title, price, amount }) => {
  /* 1 */
  /* const { greeting } = useGlobalContext()
  console.log(greeting) */

  /* 2 - 3 - 4 */
  const { remove, increase, decrease } = useGlobalContext()

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button - 2 */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount - 3 */}
        <button className='amount-btn' onClick={() => increase(id)}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decrease(id)}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  )
}

export default CartItem

// 1: importo useGlobalContext con il suo value {object}
/* torno in context.jsx per useReducer */
// 2: imposto la funzione per remove item. in onClick devo qui mantenere l'arrow function e passare l'id all'invoke di remove, perchè voglio rimuovere l'item attraverso il parametro id
/* qui non sto usando nanoid */
/* ritorno in context */
// 3: imposto increase
/* vado in reducer */
// 4: imposto decrease
