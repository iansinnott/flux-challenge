/* @flow */
/* eslint-disable flowtype/require-parameter-type */
import type { Middleware } from 'redux';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state -> Map', store.getState().toJS());
  console.groupEnd(action.type);
  return result;
};

export default loggerMiddleware;
