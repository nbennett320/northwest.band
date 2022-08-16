import React from 'react'

export interface GlobalState {
  cartId?: string | null
  setCartId: React.Dispatch<React.SetStateAction<string | null>> | null
  cartTotalQuantity?: number
  setCartTotalQuantity: React.Dispatch<React.SetStateAction<number>> | null
}

const initialState = {
  cartId: null,
  setCartId: null,
  cartTotalQuantity: 0,
  setCartTotalQuantity: null,
}

const GlobalContext = React.createContext<GlobalState | null>(initialState)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartId, setCartId] = React.useState<string | null>(null)
  const [cartTotalQuantity, setCartTotalQuantity] = React.useState<number>(0)

  const state = {
    cartId, 
    setCartId,
    cartTotalQuantity,
    setCartTotalQuantity,
  }

  React.useEffect(() => {
    const localCartId = localStorage.getItem('cartId')
    const localCartTotalQuantity = localStorage.getItem('cartTotalQuantity')

    if(localCartId && localCartTotalQuantity) {
      setCartId(localCartId)
      setCartTotalQuantity(parseInt(localCartTotalQuantity as unknown as string))
    }
  }, [])

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => {
  return React.useContext(GlobalContext)
}
