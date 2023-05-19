import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/* 1 */
import Slider from 'react-slick'
import { list } from './data'
import { FaQuoteRight } from 'react-icons/fa'

/* 2 */
const SlickCarousel = () => {
  /* 3 */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /* 6 */
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    //volendo potrei togliere fade e mettere slidesToShow: 2 -> così ho due item uno accanto all'altro
  }
  return (
    <section className='slick-container'>
      <Slider {...settings}>
        {/* 4 - 5 */}
        {list.map((person) => {
          const { id, image, name, title, quote } = person
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name} </h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'></FaQuoteRight>
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel

// 1: importo slider, la list e le icons
// 2: imposto il component
//ritorno in app
// 3: imposto le settings e il return
//vado a modificare le impostazioni css
/* dots: i punti sotto che indicano dove mi trovo tra le slides
infinite: it just means that we can navigate through all of the slides, and once we get to the last one, effectively we go to the first one
speed:  in milliseconds
slidesToShow & slidesToScroll: how many items are displayed at the time and then how many we are scrolling. 
*/
//qui ogni div messo tra <Sliders> viene trattato come item; dat che sto usando una libreria, il return è ciò che mi interessa
//vado nella component carousel
// 4: incollo quanto copiato dalla component Carousel
/* the idea is exactly the same.
However, instead of hard coding, now we're iterating over the list and then we just return those articles. */
// 5: non ho people ma list, rimuovo personIndex, la class, l'inline style. tengo solo la key
// 6: imposto la setting "fade" per dare un effetto, se mi va
// -> attenzione, slidesToShow deve essere = 1 se uso fade
//metto autoplay e altro
