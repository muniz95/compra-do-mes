import Product from "../../models/Product";
import {
  DECREASE_TOTAL,
  EDIT_PRODUCT,
  EMPTY_PRODUCTS,
  EMPTY_TOTAL,
  INCREASE_TOTAL,
  REMOVE_PRODUCT,
  SAVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants";

export const saveProduct = (product: Product) => {
  return {
    payload: product,
    type: SAVE_PRODUCT,
  };
};

export const editProduct = (product: Product) => {
  return {
    payload: product,
    type: EDIT_PRODUCT,
  };
};

export const updateProduct = (product: Product) => {
  return {
    payload: product,
    type: UPDATE_PRODUCT,
  };
};

export const removeProduct = (product: Product) => {
  return {
    payload: product,
    type: REMOVE_PRODUCT,
  };
};

export const emptyProducts = () => {
  return { type: EMPTY_PRODUCTS };
};

export const increaseTotal = (value: any) => {
  return {
    payload: value,
    type: INCREASE_TOTAL,
  };
};

export const decreaseTotal = (value: any) => {
  return {
    payload: value,
    type: DECREASE_TOTAL,
  };
};

export const emptyTotal = () => {
  return { type: EMPTY_TOTAL };
};

export default {
  saveProduct,
  editProduct,
  updateProduct,
  removeProduct,
  emptyProducts,
  increaseTotal,
  decreaseTotal,
  emptyTotal,
}
