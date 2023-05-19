import { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  /* substring - imposto dove voglio iniziare e dove voglio arrivare, la fine; voglio mettere a display come default i primi 50-100 caratteri */
  /*  console.log(info.substring(0, 10)) */

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  )
}
export default Tour

//destructure gli elementi degli item dell'api
//ricordo display-block per le img
//ora vado a impostare la funzionalità per rimuovere i tours, torno in app.jsx

//imposto removeTour nelle props e lo passo come button onClick
//ora voglio impostare la funzione show-more e show-less per i p, uso state-Value
//imposto il testo di default, lavoro su <p>{info}</p> - if read-more is true -> display it; if not -> substring
//imposto la funzionalità toggle. setReadMore(!readMore) -> lo imposto sul suo valore opposto a ogni click
/* 
{readMore ? 'show less' : 'read more'} -> if readMore is true, then I want to show show less.
However, if It's false, then it's going to be read more.
*/

//ora manca il refetch dei tours; visto che ho la funzionalità di rimuoverli, sarebbe bello se l'user potesse refetch i tours
//ritorno in app.jsx
