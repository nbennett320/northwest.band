import { 
  ADD_TO_CART
} from '../actionTypes'

const initialState = {
  cart: [],
  showCart: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const { item } = action.payload
      const updatedCart = [
        ...state.cart,
        item
      ]
      return {
        ...state,
        cart: updatedCart,
        showCart: updatedCart.cart.lengh > 0
      }
    default:
      return state
  }
}