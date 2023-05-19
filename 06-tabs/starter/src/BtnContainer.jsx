const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {/* 1 - 2 - 4 */}
      {jobs.map((item, index) => {
        return (
          /* 3  */
          <button
            key={item.id}
            onClick={() => setCurrentItem(index)}
            /* 5 */
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer

// 1: iterate over jobs, display the button for every company and flip the job
//ritorno su app
// 2: accedo a currentItem e setCI
// 3: imposto la funzione onClick e invoke setCI
// 4: in map devo anche passare index e lo passo nell'onClick
// 5: imposto delle condizioni -  if the button index matches the currentItem, then I want to add different styles.
//devo quindi cambiare la class
//If it's false, if the index does not match the current item, then it's simply going to be a job btn.
