import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  /*  console.log(openSidebar) */

  /* 1 */
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  )
}
export default Home

/* importo l'hook useGlobalContext e invoke, prendo sidebar e modal open */
/* qui voglio mandare a display due buttons, il sidebar toggle btn e modal btn; importo le icons */
/* ritorno in app.jsx per togliere <main></main> e lasciare un react fragment <> altrimenti mi da un bug */
// 1: imposto i due btn in <main></main> con le funzioni per open
/* vado su modal */
