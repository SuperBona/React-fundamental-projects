import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          /* console.log(tour); */
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        })}
      </div>
    </section>
  )
}
export default Tours

//prendo i data, iterate over, add the rest of the functionality
//inserisco le props perchè già le conosco; creo ciò che deve essere messo a display
//ricordo che nel return dopo aver iterato, devo inserire la key e i valori che voglio mettere
//qualsiasi contenuto ho in Tour.jsx, verrà inserito a display da qui
//vado a sistemare Tour.jsx

//dopo che ho creato removeTour in App.jsx, lo inserisco  nelle props e lo passo nel return
//torno nel Tour.jsx
