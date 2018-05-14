import { combineReducers } from 'redux';
import { DECREASE_TOTAL, EDIT_PRODUCT, EMPTY_PRODUCTS, EMPTY_TOTAL, INCREASE_TOTAL, REMOVE_PRODUCT, SAVE_PRODUCT, UPDATE_PRODUCT } from '../constants';

const products = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return [...state.filter((s: any) => s.id !== action.payload.id), action.payload];
    case SAVE_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return [...state.filter((s: any) => s.id !== action.payload.id)];
    case EMPTY_PRODUCTS:
      return [];
    default:
      return state;
  }
};

const product = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

const total = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_TOTAL:
      return state + Number.parseFloat(action.payload);
    case DECREASE_TOTAL:
      return state - Number.parseFloat(action.payload);
    case EMPTY_TOTAL:
      return 0;
    default:
      return state;
  }
};

export default combineReducers({
  product,
  products,
  total
});
