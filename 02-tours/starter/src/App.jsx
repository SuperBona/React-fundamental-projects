import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  /* state variable per loading */
  const [isLoading, setIsLoading] = useState(true)
  /* state variable per tours */
  const [tours, setTours] = useState([])

  /* 10 */
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  /* fetch function */
  const fetchTours = async () => {
    setIsLoading(true)
    try {
      /* 3  */
      const response = await fetch(url)
      /* 4 */
      const tours = await response.json()
      /* 6 */
      setTours(tours)

      /*  console.log(tours) */
      /* catch(error) è la condizione nel caso ci sia qualche errore, ciò che deve succedere in quel caso */
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    /* 5 */
    fetchTours()
  }, [])

  /* 7 */
  if (isLoading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    )
  }

  /* 12 */
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button
            type='button'
            style={{ marginTop: '2rem' }}
            className='btn'
            onClick={() => fetchTours()}
          >
            refresh
          </button>
        </div>
      </main>
    )
  }

  /* 8 */
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  )
}
export default App

// 1: imposto 2 state-variables, una per loading, una per tours, poi imposto la fetch function
// 2: useEffect, e per cambiare un po' le cose imposto una funzione fuori da useEffect
//attenzione, l'API ha un rate limit, se si supera da errore. Quindi deve sempre esserci la dependency array
// 3 / 4: prendo la response, aspetto che carichi e poi mi ritorna un data e lo voglio rendere json. Questo return una promise, ecco perchè uso await
// 5: invoke fetchTours; se è tutto apposto vedo in console gli item dell'api
// 6: terminato il fetching, metto a display i tours e itero sopra (map); imposto setTours e passo l'array
// 7: imposto le condizioni !prima del return! - se isLoading è true, mi carica Loading.jsx (la rotellina del caricamento)
// 8: metto a display i tours, serve un altro return dove prendo Tours.jsx e ci passo tutti i tours
// 9: su Tours.jsx, itero over tours
//10: creo la funzionalità per rimuovere i tours, posso usare filter per richiedere gli id, e i tour a cui l'id non corrisponde a quello che passo return in un nuovo array
//11: imposto la funzionalità nel return finale. ritorno nel Tours.jsx component
//12: refetch tours. if its' = 0, different title and btn;  we want to place this after is loading because while we're fetching we'll still check for that is loading.
//grazie a useState e a quanto già impostato, dato che a 0 tours, state è false, quando clicco il btn la pagina refresh e torna

/* Logica del progetto:
We have a list of tours.
So initially loading is true.
Then we fetch the tours and all that.
But remember, we can remove them from the list as well.
So at this point already loading is false.
Quando ricarico la pagina, loading deve torna true.
Once we're done fetching, we set it to false.
And since I want to re fetch them, basically you can see it over here nicely if I navigate to a components.
Notice this is false. -> that's my state value 
And in order to re fetch in order to show that loading I want to go with true and then it's going to
be false.
*/

//se in console ho multipli log, è normale perchè nel file main.jsx ci sta React.strictmode. posso toglierlo se voglio
