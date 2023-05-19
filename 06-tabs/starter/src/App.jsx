import { useEffect, useState } from 'react'
import Jobinfo from './Jobinfo'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  /* 1 */
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  /* 7 */
  const [currentItem, setCurrentItem] = useState(0)

  /* 2 */
  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

  /* 3 */
  useEffect(() => {
    fetchJobs()
  }, [])

  /* 4 */
  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )
  }

  /* 5 */
  return (
    <section className='jobs-center'>
      {/* button container */}
      {/* 9 */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      ></BtnContainer>

      {/* job info */}

      {/* 6 - 8 */}
      <Jobinfo jobs={jobs} currentItem={currentItem}></Jobinfo>
    </section>
  )
}
export default App

// 1: imposto i jobs e il loading
// 2: imposto la funzione fetch per jobs; non metto parametri perchè ho solo un fetch
//dalla response rivoglio indietro json. è importante impostare setIsLoading su false dopo aver fatto il fetch
/* I fetched the jobs. They are located over here. And first I want to set the jobs. So I want to fill the array instead of empty array.
And only then I set loading to false. */
// 3: use effect
// 4: imposto le condizioni per isLoading - ora si vede quando la pagina carica
//creo una nuova component, jobinfo
// 5: imposto il return
// 6: importo jobinfo, passo i jobs, che saranno uguali allo state value
//vado su jobinfo
// 7: imposto state value per currentItem - voglio iniziare con il primo job
// 8: in job-info passo currentItem state value
//ora vado su JobInfo e passo currentItem
// 9: imposto currentItem e setCurrentItem nel btn container
//ora vado sulla component BtnContainer
