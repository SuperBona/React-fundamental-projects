import { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  /* 1 */
  const [showLinks, setShowLinks] = useState(false)

  /* 5 */
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  /* 3 */
  const toggleLinks = () => {
    /* 7 */
    /* console.log(linksRef.current.getBoundingClientRect()) */
    setShowLinks(!showLinks)
  }

  /* 8 */
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          {/* 3 */}
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars></FaBars>
          </button>
        </div>
        {/* 2 */}
        {/* {showLinks && ( */}
        {/* 3 */}
        <div
          /* className={
            showLinks ? 'links-container show-container' : 'links-container'
          } */
          className='links-container'
          /* 6 - 8 */
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* )} */}
        {/* 9 */}
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar

// 1: imposto useState per i links e il return; nav-center usato per allineare gli items, nav-header contiene il logo e links container
/* importante anche la class links-container che contiene la ul con i links, attenzione alle proprietà */
/* su schermi piccoli voglio toggle i links, con il btn - show or hide links -> se ho state value e button, posso mandare a display i links */
/* ecco perchè serve il div links-container, ci metto la funzione onClick */
// 2: imposto funzione - if showLinks is true, display them -> prendo il div dei links e lo incollo dentro a {showLinks && ()}
/* ora links-container è nascosto perchè come state value ho false in showLinks */
// 3: funzione per btn toggle - imposto il valore opposto di showLinks con il !, quindi la condizione true, e poi metto onClick
// 4: per l'approccio fixed dei links, devo inserire qui la funzionalità show-container - in questo modo c'è un effetto smooth quando toggle;
/* bisogna rimuovere {show-links && ()} . questo approccio funziona se non devo cambiare alcun valore nei data perchè stavo usando una height specifica */
/* il setup dinamico richiede useRef e getBoundingClientRect() (questo viene da Vanilla js) - approccio dinamico; su css nascondo heigth: 0 e .show-container  */
// 5: importo useRef e creo due containers, uno per links-container e uno per i links
/* non mi serve più - showLinks ? 'links-container show-container' : 'links-container' */
// 6: aggiungo i ref a links-container e links
// 7: prima di toggleLinks voglio prendere il valore che ottengo dall'height dei links e uso getBoundingClientRect()
/* adesso se clicco il btn, in console ho i i valori dei links, per esempio dove si trova, la sua height e width, ecc... */
/* provo ad aggiungere un extra item nei data e guardo, il valore height diventa dinamico per tenere tutti i link */
// 8: imposto inline style per ottenere valore height
/* height is the property we want to control. Then we want to look for show-links and if it's true I want to set up the height, that is equal to this height.
To access that I have to set up the template literal first, thene with getBoundingClientRect(), and since I know that I'm getting back the object, I can simply chain it + height, and pixels.
If the show-links is false -> Zero pixels. */
// 9: devo aggiungere i social links
/* ricordo, su css nascondo i social links su schermo piccolo, quindi di default sono hidden, imposto media query su css */
