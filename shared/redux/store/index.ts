import { applyMiddleware, createStore } from 'redux';
import * as thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

let middlewares = [thunkMiddleware.default];
if (__DEV__) {
  const logger = require('redux-logger');
  const loggerMiddleware = logger.createLogger({
    duration: true,
  });
  middlewares = [...middlewares, loggerMiddleware];
}
const store = createStore(reducers, applyMiddleware(...middlewares));

export type AppDispatch = typeof store.dispatch;

export default store;
