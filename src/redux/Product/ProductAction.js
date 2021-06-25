import { EDIT_PRODUCT } from "./productType";
import { ADD_PRODUCT } from "./productType";

export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
