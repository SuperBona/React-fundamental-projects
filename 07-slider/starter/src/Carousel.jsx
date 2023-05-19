import { useEffect, useState } from 'react'
import { shortList, list, longList } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Carousel = () => {
  /* 1 */
  const [people, setPeople] = useState(list)

  /* 6 */
  const [currentPerson, setCurrentPerson] = useState(0)

  /* 3 - 8 */
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length
      return result
    })
  }
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length
      return result
    })
  }

  /* 10 */
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => {
      clearInterval(sliderId)
    }
  }, [currentPerson])

  return (
    <section className='slider-container'>
      {/* 2 */}
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person
        return (
          /* 6 */
          <article
            className='slide'
            key={id}
            /* 7 */
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,

              /* 9 */
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name} </h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'></FaQuoteRight>
          </article>
        )
      })}

      {/* 3 */}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight></FiChevronRight>
      </button>
    </section>
  )
}
export default Carousel

// 1: importo le liste e uso useState per impostare la shortlist come default
// 2: destructure person, iterate over the people, lo state value
// 3: imposto le funzioni per cambiare le slide con i btn, e i btn
// 4: ora cambio il valore di default (shortlist) in list - ora tutti gli item della lista si sormontano perchè tutti sono in position absolute
//ho usato shortlist perchè così era più facile vedere il layout di un singolo item
// vanno spostati a destra - uso trasnform - translate
/* if the index is zero, then I'm not going to move it, then it's going to be displayed over here.
However, if the index is one, then I'm basically going to move it to the right.
Now, if the index is two, then it's going to move even more to the right. */
// 5: imposto lo style con transform- translate
/* anche se ingrandisco o diminuisco la dimensione dello schermo, non vedo gli altri item, stanno sulla destra */
// 6: funzionalità dei btn. prima imposto lo state value
// 7: I just want to navigate where I have the translate X and instead of just multiplying with person index, I'm going to go with person index minus currentPerson.
/* If this subtraction is going to return zero, that's going to be the active slide.
Now, when it returns, a zero, if the current person is equal to a person index. */
// 8: imposto i btn con i moduli
/* ora già in automatico quando arrivo all'ultima person, mi torna alla prima, se vado indietro funziona */
// 9: per vedere solo l'active slide
//ora voglio impostare l'auto play / autoslider
//10: useEffect e setInterval
//voglio far si che quando l'user clicca sul btn, il timer viene resettato a 0
/* we need to pass in the value in the dependency array and we're looking for current person.
So we pass here current person, so every time this value changes, we invoke the setinterval. */
/* With Setinterval, we are creating those instances all the time in the browser.
And in order to avoid that, we also need to use a cleanup function. */
