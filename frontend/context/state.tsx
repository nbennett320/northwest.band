import React from 'react'

interface GlobalState {
  cartId?: string
  cartTotalQuantity?: string
}

const GlobalContext = React.createContext<GlobalState>({})

export const GlobalWrapper = ({ children }: { children: React.ReactNode }) => {
  const state: GlobalState = {}

  React.useEffect(() => {
    window.addEventListener('storage', () => {
      console.log('storage updated')
      const cartId = localStorage.getItem('cartId')
      const cartTotalQuantity = localStorage.getItem('cartTotalQuantity')

      if(cartId && cartTotalQuantity) {
        state.cartId = cartId
        state.cartTotalQuantity = cartTotalQuantity
      }
    })
  })

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return React.useContext(GlobalContext)
}
