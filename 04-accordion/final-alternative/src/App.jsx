import { useState } from 'react'
import data from './data'
import Questions from './Questions'

function App() {
  const [questions, setQuestions] = useState(data)
  /* 1 */
  const [activeId, setActiveId] = useState(null)

  /* 2 */
  const toggleQuestion = (id) => {
    /* console.log(id); */
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}

export default App

/* In the standard project i can open all the questions if I want.
Here I don't want to open multiple questions at time. I want to display only one question at time.
So when I click to open another questions, the opened-one get closed.
If i want to show only one question at time, there's going to have to be a value over here in the app.
Because we already know that if we'll set up some kind of state value over SingleQuestion, it's only going to control that question.
First we need to have some kind of state value in the app, where we have the array. And in SingleQuestion I have to refract (!showInfo) -> deve diventare uno state value  */

//inizio da App
// 1: imposto lo state value - per sapere quale question l'user vuole vedere, e di default deve essere null
// 2: pass the id down, see wich questions the user wants to look at -> imposto una struttura per la funzione
/* toggleQuestion function is going to be looking for the ID. It will need to know the ID so we know which is actually the active question.
Since each question has that ID, well, we'll use it to set the active. */

//vado su Questions e incollo lo stesso return, aggiungo il key value e modifico questions in {...question}
//devo anche impostare la deconstruction -> const Questions = ({questions, ...})

/* l'altro progetto era basato su true/false, mentre qui se guardo i components nella pagina, la singleQuestion ha come prop - activeId = null
Quando clicco sul btn, activeID diventa l'id della singleQestion, e torna null quando la answer viene chiusa */
