import { useState } from 'react'
import data from './data'
import Questions from './Questions'

const App = () => {
  /* 1 */
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      {/* 2 */}
      <Questions questions={questions}></Questions>
    </main>
  )
}
export default App

// 1: imposto lo state value, passo i (data), voglio impostare le questions e la funzione correlata
// 2: ora creo questi due componenti in file separati e qui li andrò a importare nel return
//prendo e passo Questions; questions prop is going to be equal to a questions state value.
//vado nel file Questions
