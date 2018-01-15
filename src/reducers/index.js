import { SAVE_PRODUCT, REMOVE_PRODUCT } from '../constants'
import { combineReducers } from 'redux'

const product = (state = {}, action) => {
  switch (action.type) {
    case SAVE_PRODUCT:
      return action.payload
    case REMOVE_PRODUCT:
      return {}
    default:
      return state
  }
}

export default combineReducers({
  product
})