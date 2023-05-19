import { useContext, useReducer, useEffect, createContext } from 'react'
import reducer from './reducer'
import cartItems from './data'
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'
import { getTotals } from './utils'

/* 15 */
const url = 'https://www.course-api.com/react-useReducer-cart-project'

/* 1 */
const AppContext = createContext()

/* 4 (spostato in reducer.js) */
/* const reducer = (state, action) => {
  return state
} */

/* 5 - 8 - 9 */
const initialState = {
  loading: false,
  /* cart: [...cartItems], */
  cart: new Map(cartItems.map((item) => [item.id, item])),
}

export const AppProvider = ({ children }) => {
  /* 3 - 6 - 7 */
  const [state, dispatch] = useReducer(reducer, initialState)

  /* 14 */
  const { totalAmount, totalCost } = getTotals(state.cart)

  /* 10 */
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  /* 11 */
  const remove = (id) => {
    /* console.log(id) */
    dispatch({ type: REMOVE, payload: { id } })
  }

  /* 12 */
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }

  /* 13 */
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }

  /* 15 - 16 */
  const fetchData = async () => {
    dispatch({ type: LOADING })
    const response = await fetch(url)
    const cart = await response.json()
    /*  console.log(cart) */
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } })
  }
  useEffect(() => {
    fetchData()
  }, [])

  /* const greeting = 'hello' */
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

/* 2 */
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// 1: inizio da qua per creare il context (AppContext) e il suo component (AppProvider); in quest'ultimo come return ho un object (value={{}})
// 2: poi creo il global hook, useGlobalContext (quindi un contesto globale) che mi ritorna un contesto d'uso useContext, a cui voglio passare l'AppContext
/* vado in main.jsx per impostare l'app */
// 3: useReducer: lo imposto in AppProvider; ricordo che questo ha bisogno della reducer funct, che è responsabile del return del nuovo state aggiornato, e l'initial value; imposto solo lo scheletro per prima (const [] = useReducer())
// 4: creo la reducer function e poi la sposto in un file diverso; ricordo che questa cerca uno state e una action; se non corrisponde alcun action type avrò errore
// 5: inizio a lavorare sull'initial state; dato che ho nei data un array di items, lo potrei impostare come stato iniziale un array, ma...
/* di solito in un'app ho più di uno state value ed eventualmente loading se fetching data da un'Api; qui ha senso impostare l'initial state come un object, perchè così si possono modificare le proprietà volendo, aggiungerle, toglierle,
così da non rimanere bloccati nell'array del Cart, che ha solo una proprietà, il suo initial state value */
// 6: imposto useReducer dopo aver impostato initialState e reducer, entro cui appunto passo la reducer function e initial state
/* viene restituito lo [state], ma non solo lo stato iniziale; quando uso reducer per cambiare questi valori ottengo sia questo state e anche un dispatch, una funzione che permette di inviare un'azione che poi verrà gestita nel reducer.
inizio con lo [state, dispatch]. Quando poi avrò le funzioni clearCart, remove, increase, decrease, fetchData, lì dispatch queste actions */
// 7: state ha due valori (const initialState) e li voglio passare entrambi come value di AppContext.Provider
/* sposto reducer in un file diverso perchè di solito questo è il normal setup; meglio avere un file solo per le actions */
/* actions: se uso una variabile ho meno probabilità di avere bug dopo; posso anche creare un file action.js dove impostare tutte le actions; creo e lì imposto tutte le variabili, e le vado a importare dove serve (nel context.jsx e nel reducer.js) */
/* di solito si fa alla fine quando si conoscono già tutte le actions che servono */
/* vado su actions.js */
// importo le actions
// 8: importo i cartItems e li passo nel value cart di initialState
/* 9: invece di prendere gli elementi di cart dal file CartContainer, imposto il valore dello state nel context.jsx, usando map. item.id sarà il key value e item l'oggetto */
/* vado in CartContainer */
//10: imposto la clear function, che a differenza delle altre non ha bisogno di specifici parametri
/* non posso aggiornare lo state iniziale direttamente, devo usare dispatch, dove passo l'action e poi si gestisce nella reducer function */
/* ricordo di impostare le actions anche in AppContext.Provider */
// 11: imposto la funzione remove items, a cui serve l'id come parametro, e serve dispatch per l'action. devo passare sia il type dell'action che l'id; come convenzione si usa payload:{id}, ma posso anche scrivere solo id
// 12: anche per increase serve id come parametro e devo invoke i cart items
// 13: decrease
/* vado in cartItem e reducer.js per impostare il resto per queste actions */
// 14: calcolo i totals dopo aver impostato lo state, poi invoke i totals. in console, con log in utils, posso vedere Map degli items che ho nel carrello e ci devo accedere, e poi vado in reducer anche qui
/* useEffect lo userò quando arrivo a fetch */
/* passo totalAmount e totalCost in AppContext.Provider, e poi imposto la funzionalità. */
/* torno in Navbar.jsx */
// imposto il loading, di cui ricordo ho initial state false. lo voglio impostare nel file app.jsx
// 15: fetch funtionality, mi serve l'url che sta in readme e lo importo
// 16: dispatch due actions, una per loading; poi vado in reducer e la imposto, poi metto qui l'action per mettere a display gli items, ricordo di passare cart come payload
