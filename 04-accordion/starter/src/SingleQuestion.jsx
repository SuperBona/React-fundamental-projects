import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

/* 2 */
const SingleQuestion = ({ title, info }) => {
  /* 1 */
  const [showInfo, setShowInfo] = useState(false)
  /* 3 */
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
          {/* 6 */}
          {showInfo ? (
            <AiOutlineMinus></AiOutlineMinus>
          ) : (
            <AiOutlinePlus></AiOutlinePlus>
          )}
        </button>
      </header>

      {/* 4 */}
      {showInfo && <p>{info}</p>}
    </article>
  )
}
export default SingleQuestion

//importo le icons
// 1: imposto lo state Value e lo metto su false di default
// 2: a quale prop voglio accedere? title e info - destructuring
// 3: return - posso vedere sia le questions che le answers per ora. devo impostare il toggle per le answers
// 4: setting up the info based on the state value -> So if it's true, then we want to display the paragraph. If not, then we want to hide it.
//{showInfo && <p>{info}</p>} -> if this is true only, then I want to display that paragraph.
//ricordo che ho lo state value impostato su false come default (showInfo = useState(false))
// 5: imposto i btn nell'header
/* on click -> I'll pass here the arrow function since I'm going to invoke it.
So I'm going to go set showInfo and let's just pass in the opposite value. 
La funzionalità toggle ora è attiva; se clicco compare la risposta, se riclicco scompare -> toggle false to true and true to false */
// 6: imposto le icone per i btn - iconos displayed by state value - if it's true = display minus icon / false = plus icon
//ternary operator
/* So we're going to go here with the first one. I'm going with minus. Let's pass it in.
Now, if it's false, then we want to go with plus */

/* whenever we're talking about component and some kind of state value, essentially it only affects that one component. */
