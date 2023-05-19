import SingleQuestion from './SingleQuestion'

/* 1 */
const Questions = ({ questions }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {/* 2 */}
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question}></SingleQuestion>
      })}
    </section>
  )
}
export default Questions

//qui è dove voglio prendere la prop, iterate over, retunr SingleQuestion
// 1: prop = questions
// 2: iterate over the questions prop -> posso farlo in quanto è un array. Per ogni item, voglio in return una SingleQuestion
//we're looking for single question. We import that. Remember the key. So we're going to go here with question and then.id, and then we want to pass everything down.
//So question is equal to ...question.
//ora vado in SingleQuestion
