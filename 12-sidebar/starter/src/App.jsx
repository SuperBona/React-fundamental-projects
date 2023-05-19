import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <>
      <Home></Home>
      <Modal></Modal>
      <Sidebar></Sidebar>
    </>
  )
}
export default App

/* dopo aver importato i 3 components, lavoro nel global context, imposto gli state values, uno per sidebar e uno per modal, entrambi boolean, e imposto una funzione per controllare gli state value
volendo potrei passare solo la setFunction. creo il file context.jsx e lì vado */
