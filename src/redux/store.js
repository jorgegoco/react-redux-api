/* eslint no-underscore-dangle: 0 */
import { createStore } from 'redux';

import reducers from './reducers/allReducers';

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
