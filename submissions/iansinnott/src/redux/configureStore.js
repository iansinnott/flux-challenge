/* @flow */
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { reducer, epic } from '../modules/root.js';
import loggerMiddleware from './loggerMiddlware.js';

export default function configureStore() {
  const middleware = [
    createEpicMiddleware(epic),
  ];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(loggerMiddleware);
  }

  const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  );

  return store;
}
