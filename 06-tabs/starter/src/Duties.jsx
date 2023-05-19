import { FaAngleDoubleRight } from 'react-icons/fa'
/* 3 */
import { v4 as uuidv4 } from 'uuid'

/* 1 */
const Duties = ({ duties }) => {
  /*  console.log(duties) */

  return (
    <div>
      {/* 2 */}
      {duties.map((duty, index) => {
        /* 4 */
        const id = uuidv4()
        /* console.log(id) */

        return (
          /* 4 */
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Duties

// 1: accedo a duties
// 2: iterate over duties and for every item, return a div with that particular item
//devo impostare delle key uniche da usare al posto di index -> installo Nano ID, un software che crea id unici
//installo la libreria uuid -> npm install uuid -> attezione alle versioni
//ricordo che in packaje.json posso vedere tutte le cose installate, quindi se ho le icons e la versione, se ho uuid e la versione, ecc...
// 3: importo uuid
// 4: imposto uuid nel return, che ci da unique id
//ora imposto i btn, nuovo component, e lo metto in app
