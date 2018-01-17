import { SAVE_PRODUCT, REMOVE_PRODUCT, INCREASE_TOTAL, DECREASE_TOTAL, EMPTY_TOTAL } from "../constants";

export const saveProduct = (product) => {
  return {
    type: SAVE_PRODUCT,
    payload: product
  };
};

export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
};

export const increaseTotal = (value) => {
  return {
    type: INCREASE_TOTAL,
    payload: value
  };
};

export const decreaseTotal = (value) => {
  return {
    type: DECREASE_TOTAL,
    payload: value
  };
};

export const emptyTotal = () => {
  return { type: EMPTY_TOTAL }
}
