import { combineReducers } from "redux";
import {
  DECREASE_TOTAL,
  EDIT_PRODUCT,
  EMPTY_PRODUCTS,
  EMPTY_TOTAL,
  INCREASE_TOTAL,
  REMOVE_PRODUCT,
  SAVE_PRODUCT,
  UPDATE_PRODUCT
} from "../constants";
import Product from "../../models/Product";

interface IAction {
  type: string;
  payload: any;
}

const byIdAsc = (a: Product, b: Product) => a.id - b.id;

const products = (state: Product[] = [], action: IAction): Product[] => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return [...state.filter((s: any) => s.id !== action.payload.id), action.payload].sort(byIdAsc);
    case SAVE_PRODUCT:
      return [...state, action.payload].sort(byIdAsc);
    case REMOVE_PRODUCT:
      return [...state.filter((s: any) => s.id !== action.payload.id)].sort(byIdAsc);
    case EMPTY_PRODUCTS:
      return [];
    default:
      return state;
  }
};

const product = (state = {}, action: IAction) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

const total = (state = 0, action: IAction) => {
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

const reducer = combineReducers({
  product,
  products,
  total
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
