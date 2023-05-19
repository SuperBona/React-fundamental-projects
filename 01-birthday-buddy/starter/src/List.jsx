//iterate over the list
// List =({proprietà a cui accedo}); return a person

import Person from './Person'

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person}></Person>
      })}
    </section>
  )
}
export default List

//inserisco in questa lista tutte le person prendendole dal file person, entro cui ho creato
//ciò che deve essere mostrato
