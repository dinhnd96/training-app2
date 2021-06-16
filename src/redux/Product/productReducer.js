import { EDIT_PRODUCT } from "./productType";

const initialValues = {
  productName: "",
  productShortName: "",
  productPlace: "",
  productExp: "",
  productUse: "",
  productDescription: "",
  img: "",
};

const productReducer = (state = initialValues, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return state;
    default:
      return state;
  }
};

export default productReducer;
