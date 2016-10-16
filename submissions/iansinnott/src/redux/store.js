/* @flow */
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import planetMonitor from '../modules/planet-monitor';

const reducer = combineReducers({
  planetMonitor,
});

const store = createStore(reducer);

export default store;
