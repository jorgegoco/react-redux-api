import ActionTypes from '../constants/action-types';

const intialState = {
  products: [{
    id: 1,
    title: 'George',
    category: 'programmer',
  }],
};

// const productsReducer = (state = intialState, action) => {
const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productsReducer;
