import Hero from './Hero'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  )
}
export default App

/* inserisco il global hook creato in context.jsx - destructuring */
/* creo 4 components, navbar, hero, sidebar, submenu e voglio render them */
/* vado su navbar */
