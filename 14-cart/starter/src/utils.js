export const getTotals = (cart) => {
  /*  console.log(cart) */
  let totalAmount = 0
  let totalCost = 0

  /* 2 */
  /* for (let item of cart.values()) {
    console.log(item)
  } */
  for (let { amount, price } of cart.values()) {
    totalAmount += amount
    totalCost += amount * price
  }

  return {
    totalAmount,
    totalCost,
  }
}

// 1: creo una funzione da esportare, per ottenere il total amount degli items nel cart e il prezzo totale; quindi devo passare il cart e accedervi in context.jsx
/* imposto anche due variabili, una con totalAmount = 0 che è il num degli items nel carrello, e l'altra per il prezzo */
/* ora torno in context.jsx */
// 2: per impostare le funzioni di totalAmount e totalCost voglio loop over the key value pairs in the map, quindi la struttura sarà
/* for (let [key,  {name, price, quantity}] of cart) {console.log(key, name, price, quantity)} */
/* per total price mi serve moltiplicare il prezzo dell'item per 'amount nel cart di questo item e sommarlo agli altri */
/* devo usare += per Amount e per il price amount moltiplicato per price */
/* ora il problema è che il prezzo totale è un numero decimale con cifre decimali non limitate, cioè troppo grande, e lo voglio limitare alle prime due decimali */
/* devo usare toFixed in totalCost e specificare quanti items voglio dopo il punto (voglio due decimali). torno quindi in cart container */
