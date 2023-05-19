import { useGlobalContext } from './context'
import sublinks from './data'
import { useRef } from 'react'
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const submenuContainer = useRef(null)

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current
    /* const result = submenu.getBoundingClientRect() */
    const { left, right, bottom } = submenu.getBoundingClientRect()
    const { clientX, clientY } = event
    /* console.log(submenu);
    console.log(clientX, clientY);
    console.log(result) */

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default Submenu

/* import e return */
/* when I'm hovering over, what do I want to do? I want to display that specific page; that page is located in my siblings.
So we do need to use JavaScript to get the actual page. So I'm talking about the object where we have the page name as well as the links array.
Now we have the page ID, which initially is null, but as we're hovering, of course we're changing the value. 
we're looking for item (pageId because that's the property) and if that is equal to the page ID, we have two options.
it's going to find a object or, if not, it's going to be undefined.
And of course, initially this will be undefined because our page ID value by default is null. But when we're hovering, that's when we will get the pageId and we'll be able to find the page. */
/* I want to grab this currentPage and I want to set it up in return. And we have multiple approaches.
We can set up the ternary operator, since I know that I'll show and hide using the classes.
Now, since our initial value in the context is going to be null, it's a good idea to use optional chaining where basically we only pull out those properties if the current page actually is the object. */
/* Style = if current page exists, grab me the links. If that exists, then grab me the length of the links array and if it's bigger than three, then do something.
If it's actually bigger than three, I want to go with one fraction and one fraction, so we create that two column layout.
If it's smaller than three, then I'm going to go with one fraction */

/* devo anche far in modo che il submenu si chiuda quando l'user sposta il cursore a sinistra o destra del submenu; */
/* const handleMouseLeave; ogni volta che questo evento run, devo settare pageId = null per chiudere il submenu */
/* quando passo da un nav-link all'altro devo impedire che il submenu si chiuda per avere una migliore user experience */
/* con: const submenu = submenuContainer.current, in console log dovrei vedere l'elemento stile html, che mi serve; devo target il suo value con client (clientX,  clientY).
ora ogni volta che l'evento run, vedo le coordinate x e y del cursore, che mi servono. devo anche prendere la dimensione del submenu.
getBoundingClientRect() -> (posso vedere questo tipo di funzionalità sul sito Mdn web docs).
Button = distanza tra il top viewport e il botton dell'elemento;
Left = left del viewport e left edge dell'elemento;
Rigth: left edge vp e right edge dell'elemento;
Top. */
/* Questi valori servono perchè: only if we move to the right or bottom and left, then we close the submenu. However, if we just move up, well, then we leave it there. */
/*  if the cursor X is less than left, I want to set that pageId equal to null. If it's bigger than the bottom one, hide it. And the same over here with the right.
So for the bottom and right, we'll be looking for cursor value bigger than these dimensions.
And for the left one, that's the one where we want to check if the cursor X is less than the left one. */
