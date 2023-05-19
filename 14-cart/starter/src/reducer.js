import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'

const reducer = (state, action) => {
  /* 1 - 2 - 3 - 4 - 5 */
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart)
    newCart.delete(action.payload.id)
    return { ...state, cart: newCart }
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart)
    const itemId = action.payload.id
    const item = newCart.get(itemId)
    /* console.log(item) */
    const newItem = { ...item, amount: item.amount + 1 }
    newCart.set(itemId, newItem)
    return { ...state, cart: newCart }
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart)
    const itemId = action.payload.id
    const item = newCart.get(itemId)
    /* console.log(item) */

    if (item.amount === 1) {
      newCart.delete(itemId)
      return { ...state, cart: newCart }
    }
    const newItem = { ...item, amount: item.amount - 1 }
    newCart.set(itemId, newItem)
    return { ...state, cart: newCart }
  }
  if (action.type === LOADING) {
    return { ...state, loading: true }
  }
  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]))
    return { ...state, loading: false, cart: newCart }
  }
  throw new Error(`no matching action type : ${action.type}`)
  /*  return state */
}

export default reducer

//importo le actions
// 1: imposto le condizioni per clearCart e l'error se serve; nel return ho il current state e qui faccio gli aggiornamenti.
/* se avessi un array, così sarebbe: {...state, cart: []}, ma se non avessi un array allora uso map */
// 2: imposto remove e creo una nuova map instance dove passo il cart di nuovo. nella map instance ho un method che si chiama delete, che cerca il key value
/* perchè uso newCart e Map? dato che sto usando reduce voglio essere sicura di non mutare lo state iniziale, cosa che potrebbe dare bug */
/* se avessi un array, piuttosto che map potrei fare const someValue = [...state. --]. com Map faccio la stessa cosa, creo una nuova instance.
con const newCart = new Map(state.cart) non mi riferisco più ai valori precedenti,
e con return {...state, cart: newCart} ho copiato i valori esistenti (...state) e li ho sovrascritti (cart: newCart).
Questo va fatto con tutte le altre actions che vado a creare, prima creo una nuova instance, passo i valori esistenti quindi aggiorno i valori iniziali, e li sovrascrivo */
/* torno in context per impostare increase */
// 3: increase; prendo l'item id e lo uso per individuare l'item specifico. in questo caso, Map con get method. ora che ho item lo devo sovrascrivere, quindi trattandosi di increase, voglio modificare amount + 1 (aggiungo 1 a ogni click)
/* ora devo usare set. method con newCart e passo due cose: se con Get mi basta passare la key, qui con Set devo anche passare il value */
/* torno in context per decrease */
// 4: decrease, ma se vado a 0 mi rimuove l'item. va bene copiare increase e mettere - 1 ma se andassi sotto lo 0 mi da errore, devo limitarlo aggiungendo questo if, poi il resto che stava in increase ma con -1 */
/* ora voglio impostare la funzione per calcolare il totale degli items nel cart e la somma totale. qui torna useEffect. Devo creare un nuovo file, utils.js e vado lì */
// 5: imposto loading e torno in context per la seconda action, poi imposto anche display-items; attenzione alla logica
