import Duties from './Duties'

/* 1 - 4 */
const Jobinfo = ({ jobs, currentItem }) => {
  /* 2 - 4 */
  const { company, dates, duties, title } = jobs[currentItem]

  /* 3 */
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties}></Duties>
    </article>
  )
}
export default Jobinfo

// 1: imposto jobs come parametro
// 2: accedo al primo jobs dell'array, voglio alcuni dati: company, date, duties, title - destructure
// 3: imposto il return
//creo una nuova component per duties e le passo, poi vado su quella component
// 4: passo currentItem da App e lo metto in display
/* if I go back to App JS, and if I change currentItem use state from 0 to 1, I should see a different job displayed. */
/* currentItem sarà quindi dinamico */
