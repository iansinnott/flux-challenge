/* @flow */
import { createStore, applyMiddleware } from 'redux';

import { reducer } from '../modules/root.js';
import loggerMiddleware from './loggerMiddlware.js';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;
