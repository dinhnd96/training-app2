import { EDIT_PRODUCT } from "./productType";

const product = {
  productName,
  productShortName,
  productPlace,
  productExp,
  productUse,
  productDescription,
  img,
};

export const editProduct = () => {
  return {
    type: EDIT_PRODUCT,
    payload: product,
  };
};
