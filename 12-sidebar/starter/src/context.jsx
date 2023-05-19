import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

/* 1 */
export const AppProvider = ({ children }) => {
  /* 2 */
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  /* 3 */
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  /* 4 */
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

/* 5 */
export const useGlobalContext = () => {
  return useContext(AppContext)
}

/* importo quello che mi serve da react e poi creo il contesto, appcontext */
// 1: creo il component da esportare; lo chiamo const AppProvider perchè voglio il provider, ma devo accedere a {children} altrimenti non funziona
// 2: imposto gli state value per sidebar(open) e modal(open); volendo potrei passare solo i valori e setFunction e usare quest'ultima per open e close i due component, oppure impostare le funzioni nel component
// 3: imposto qui le funzioni
// 4: imposto value property nel appcontext provider e gli dò i due state value, sidebar e modal e passo entrambe le funzioni
// 5: imposto custom hook da esportare; non metto alcun parametro perchè mi interessa solo il return e uso lo special hook per il context, che sarà appcontext, quello creato tutto in cima
/* ora vado in main.jsx per prendere il provider, appprovider, e wrap l'app, poi vado su Home */
