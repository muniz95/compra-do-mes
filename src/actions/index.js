import { SAVE_PRODUCT, REMOVE_PRODUCT } from "../constants";

export const saveProduct = (product) => {
  const action = {
    type: SAVE_PRODUCT,
    payload: product
  };
  return action;
};

export const removeProduct = (product) => {
  const action = {
    type: REMOVE_PRODUCT,
    payload: product
  };
  return action;
};
