import { useGlobalContext } from './context'
import sublinks from './data'

const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default NavLinks

/* prendo i data del sublinks e globalcontext; il btn apre i sublinks. questo component ha i 3 links che in schermo grande stanno in cima */
/* questi navLinks sono inseriti dentro a Navbar, quindi forma tutto l'insieme della barra in alto con i links e il logo */
/* importo globalcontext */
/* quando hover sui links su schermo grande, compare un menu con i links; onMouseEnter */
