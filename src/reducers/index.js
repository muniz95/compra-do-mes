import { SAVE_PRODUCT, REMOVE_PRODUCT, INCREASE_TOTAL, DECREASE_TOTAL, EMPTY_TOTAL } from '../constants'
import { combineReducers } from 'redux'

const products = (state = [], action) => {
  switch (action.type) {
    case SAVE_PRODUCT:
      return [...state, action.payload]
    case REMOVE_PRODUCT:
      return {}
    default:
      return state
  }
}

const total = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_TOTAL:
      return state + action.payload
    case DECREASE_TOTAL:
      return state - action.payload
    case EMPTY_TOTAL:
      return 0
    default:
      return state
  }
}

export default combineReducers({
  products,
  total
})