import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import NavLinks from './NavLinks'
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()
  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  )
}
export default Navbar

/* imposto gli import e il return, ricordo onClick */
/* vado su hero */
/* qui mi serve setPageId perchè se gli aggiungo null posso nascondere il submenu */
/* onMouseHover - quando hover su navbar, si chiude il submenu */
/* la funzione handleSubmenu richiede di passare event (e) perchè accedo a un target; se sto navigando sui nav-links si apre il submenu, altrimenti si chiude */
/* questi 3 nav-link sono btn */
/* devo anche far in modo che il submenu si chiuda quando l'user sposta il cursore a sinistra o destra del submenu; vado su submenu */
