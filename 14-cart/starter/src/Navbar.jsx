import { FaCartPlus } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  const { totalAmount } = useGlobalContext()
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

/* devo impostare useGlobalContext quando arrivo a impostare totalAmount e totalCost, e metto in display totalAmount nel p classname total-amount */
/* torno in cartContainer.jsx */
