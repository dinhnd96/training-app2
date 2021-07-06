import { EDIT_PRODUCT } from "./productType";

const initialValues = [];

const productReducer = (state = initialValues, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      const newState = action.product;
      console.log(action);
      localStorage.setItem("productOffline", JSON.stringify(newState));
      return action.product;
    default:
      return state;
  }
};

export default productReducer;
