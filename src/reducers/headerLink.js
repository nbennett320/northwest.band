import { 
  SET_HEADER_LINK
} from '../actions'

export default (state = '/', action) => {
  switch(action.type) {
    case SET_HEADER_LINK: 
      return action.headerLinkw
    default:
      return state
  }
}