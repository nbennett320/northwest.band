import { 
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_HEADER_LINK,
  MEASURE_DEVICE
} from './actionTypes'

export const addToCart = (itemAdded, match) => {
  // add match object and 4 digit code to easily access and remove items
  const item = {
    ...itemAdded,
    instanceCode: (Math.random()*0xFFFFFF<<0).toString(16).substring(0,4),
    match
  }
  return {
    type: ADD_TO_CART,
    payload: {
      item
    }
  }
}

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  payload: {
    item
  }
})

export const setHeaderLink = link => ({
  type: SET_HEADER_LINK,
  payload: {
    headerLink: link
  }
})

export const measureDevice = () => ({
  type: MEASURE_DEVICE
})