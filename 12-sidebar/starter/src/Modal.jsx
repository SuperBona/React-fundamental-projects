import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

/* 1 */
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    /* 2 */
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}
export default Modal

/* imposto due import, useGC e react icons; qui voglio aprire e chiudere il modal */
// 1: dopo aver impostato useGlobalContext(), imposto il return, a cui per ora assegno solo una classe, modal-overlay
// 2: ho uno statevalue, che ora per il context è false, ma ho una funzione che lo controlla. imposto la logica nel div
/* abbiamo già la funzione per aprire il modal, devo solo alternare tra true e false; buona parte della logic sta in css */
/* vado su sidebar component */
