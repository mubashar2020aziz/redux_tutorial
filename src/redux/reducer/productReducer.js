import { ADD_PRODUCT } from './../action/Types';

//    initialState

const initialState = {
  Product: [],
};

//   product
export function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      var product = state.Product;
      product.push(action.payload);

      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
}
