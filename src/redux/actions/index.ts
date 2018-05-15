import { DECREASE_TOTAL, EDIT_PRODUCT, EMPTY_PRODUCTS, EMPTY_TOTAL, INCREASE_TOTAL, REMOVE_PRODUCT, SAVE_PRODUCT, UPDATE_PRODUCT } from '../constants';

export const saveProduct = (product) => {
  return {
    payload: product,
    type: SAVE_PRODUCT
  };
};

export const editProduct = (product) => {
  return {
    payload: product,
    type: EDIT_PRODUCT
  };
};

export const updateProduct = (product) => {
  return {
    payload: product,
    type: UPDATE_PRODUCT
  };
};

export const removeProduct = (product) => {
  return {
    payload: product,
    type: REMOVE_PRODUCT
  };
};

export const emptyProducts = () => {
  return { type: EMPTY_PRODUCTS };
};

export const increaseTotal = (value) => {
  return {
    payload: value,
    type: INCREASE_TOTAL
  };
};

export const decreaseTotal = (value) => {
  return {
    payload: value,
    type: DECREASE_TOTAL
  };
};

export const emptyTotal = () => {
  return { type: EMPTY_TOTAL };
};
