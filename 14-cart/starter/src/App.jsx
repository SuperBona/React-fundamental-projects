// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'

function App() {
  /* 1 */
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <main>
        <div className='loading' style={{ marginTop: '6rem' }}></div>
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App

// 1: qui voglio impostare il loading, serve useGlobalContext e imposto le condizioni
/* torno in context per fetch funtionality */
