import Carousel from './Carousel'
import SlickCarousel from './SlickCarousel'

const App = () => {
  return (
    <main>
      {/* <Carousel></Carousel> */}
      <SlickCarousel></SlickCarousel>
    </main>
  )
}
export default App

//per questo progetto uso la libreria React Slick e ci sono due modi, guardo sul sito
//posso creare una nuova component entro cui importare il pacchetto dopo averlo installato oppure
//ciò che faccio -> npm install react-slick --save
//poi -> npm install slick-carousel --save
//commento la component carousel per non vederla
//creo una nuova component e dentro ci metto gli import della library
//importo il component SlickCarousel, e ora dovrei vedere il component a schermo (altrimenti, riavvio e run dev)
//ritorno al component
