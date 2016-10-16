/* @flow */
import type { Store } from 'redux';

export default function loggerMiddleware(store: Store) {
  return (next: Function) => (action: Object) => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state -> Map', store.getState().toJS());
    console.groupEnd(action.type);
    return result;
  };
}
