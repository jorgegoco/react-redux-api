import ActionTypes from '../constants/action-types';

const intialState = {
  products: [],
};

// const productsReducer = (state = intialState, action) => {
const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default productsReducer;
