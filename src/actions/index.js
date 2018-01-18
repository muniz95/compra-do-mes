import { SAVE_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT, INCREASE_TOTAL, DECREASE_TOTAL, EMPTY_TOTAL, EMPTY_PRODUCTS, UPDATE_PRODUCT } from "../constants"

export const saveProduct = (product) => {
  return {
    type: SAVE_PRODUCT,
    payload: product
  }
}

export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    payload: product
  }
}

export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product
  }
}

export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  }
}

export const emptyProducts = () => {
  return { type: EMPTY_PRODUCTS }
}

export const increaseTotal = (value) => {
  return {
    type: INCREASE_TOTAL,
    payload: value
  }
}

export const decreaseTotal = (value) => {
  return {
    type: DECREASE_TOTAL,
    payload: value
  }
}

export const emptyTotal = () => {
  return { type: EMPTY_TOTAL }
}
