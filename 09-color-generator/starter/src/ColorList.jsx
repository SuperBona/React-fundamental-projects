import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return (
          <SingleColor color={color} key={nanoid()} index={index}></SingleColor>
        )
      })}
    </section>
  )
}
export default ColorList

//prendo i colors e iterate over; uso una delle due libraries, uuid o nanoid, per avere id unici
//imposto gli id while iterating. intanto uso index al posto di key, il che mi da errore in console. importo nanoid
//imposto la key al posto di index
/* vado su singlecolor */
