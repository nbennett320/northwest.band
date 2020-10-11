export const ADD_TO_CART = 'ADD_TO_CART'
export const SET_HEADER_LINK = 'SET_HEADER_LINK'

export const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

export const setHeaderLink = link => ({
  type: SET_HEADER_LINK,
  headerLink: link
})