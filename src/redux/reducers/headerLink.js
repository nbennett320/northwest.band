import { 
  SET_HEADER_LINK
} from '../actionTypes'

const initialState = {
  headerLink: '/'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_HEADER_LINK: 
      const { headerLink } = action.payload
      return headerLink
    default:
      return state
  }
}