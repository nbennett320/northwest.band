import React from 'react'

export interface GlobalState {
  cartId?: string | null
  setCartId: ((cartId: string) => void) | null
  cartTotalQuantity?: number
  setCartTotalQuantity: ((cartTotalQuantity: number) => void) | null
}

const initialState = {
  cartId: null,
  setCartId: null,
  cartTotalQuantity: 0,
  setCartTotalQuantity: null,
}

const GlobalContext = React.createContext<GlobalState | null>(initialState)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartId, setCartIdInternal] = React.useState<string | null>(null)
  const [cartTotalQuantity, setCartTotalQuantityInternal] = React.useState<number>(0)

  const setCartId = (cartId: string) => {
    setCartIdInternal(cartId)
    localStorage.setItem('cartId', cartId)
  }

  const setCartTotalQuantity = (val: number) => {
    setCartTotalQuantityInternal(val)
    localStorage.setItem('cartTotalQuantity', val as unknown as string)
  }

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
      setCartIdInternal(localCartId)
      setCartTotalQuantityInternal(parseInt(localCartTotalQuantity as unknown as string))
    }
  }, [])

  // React.useEffect(() => {
  //   if(cartTotalQuantity === 0) setCartIdInternal(null)
  // }, [cartTotalQuantity])

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => {
  return React.useContext(GlobalContext)
}
