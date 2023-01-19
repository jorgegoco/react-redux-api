import ActionTypes from '../constants/action-types';

const intialProductsState = {
  products: [],
};

// const productsReducer = (state = intialState, action) => {
export const productsReducer = (state = intialProductsState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
