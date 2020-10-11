import { combineReducers } from 'redux'
import { 
  addToCart,
  setHeaderLink
} from '../actions'

export default combineReducers({
  addToCart,
  setHeaderLink
})