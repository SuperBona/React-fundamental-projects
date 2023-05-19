import logo from './logo.svg'
import { social, links } from './data'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Sidebar = () => {
  /* 1 */
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    /* 3 */
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      {/* 2 */}
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar

/* qui la logica è simile, toggle class, hiding e visibility.. */
/* importo ciò che serve */
// 1: prendo ciò che mi serve da useGlobalContext e lavoro nel return
// 2: imposto due list per icons e links, destructuring
// 3: imposto la logica per toggle sidebar (una parte della logica sta in css)
