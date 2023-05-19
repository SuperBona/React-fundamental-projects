import { toast } from 'react-toastify'

const SingleColor = ({ index, color }) => {
  /* console.log(color) */

  /* 1 */
  const { hex, weight } = color

  /* 3 */
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy to clipboard')
      }
    } else {
      toast.error('Clipboard access not avaiable')
    }
  }

  return (
    /* 2 - 3 */
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}
export default SingleColor

//importo index e color
/* negli items voglio impostare la percentuale della gradazione, l'hex , il colore. per accedere all'hex, devo accedere alla prop hex, il colore va a display con weight */
// 1: prendo le propietà che mi interessano e lavoro nel return, entro cui imposto l'hex del color item come background -> ora vedo questo colore, non il codice hex
/* per vedere il codice hex e la percentuale della gradiazione color, imposto due p dove prendo i valori */
/* dato che i colori diventano scuri e diventa difficile leggere i p, uso index e basandomi su questo aggiungo un'altra class, color light, per rendere il testo bianco */
/* 2: come classname dell'article imposto la funzione prendendo index, (che proviene da colorList), una class dinamica */

/* react toastify library -> npm i react-toastify ( buona per usare alerts or toasts) -> lo devo inserire nel MAIN */
/* 3: on click - saveToClipboard per salvare il valore che voglio ${hex}, fa copia dell'hex */
/* navigator- special keyword coming from the browser */
