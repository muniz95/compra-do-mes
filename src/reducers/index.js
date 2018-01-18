import { SAVE_PRODUCT, EDIT_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT, INCREASE_TOTAL, DECREASE_TOTAL, EMPTY_TOTAL, EMPTY_PRODUCTS } from '../constants'
import { combineReducers } from 'redux'

const products = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return [...state.filter(s => s.id !== action.payload.id), action.payload]
    case SAVE_PRODUCT:
      return [...state, action.payload]
    case REMOVE_PRODUCT:
      return [...state.filter(s => s.id !== action.payload.id)]
    case EMPTY_PRODUCTS:
      return []
    default:
      return state
  }
}

const product = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return action.payload
    default:
      return state
  }
}

const total = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_TOTAL:
      return state + Number.parseFloat(action.payload)
    case DECREASE_TOTAL:
      return state - Number.parseFloat(action.payload)
    case EMPTY_TOTAL:
      return 0
    default:
      return state
  }
}

export default combineReducers({
  products,
  product,
  total
})