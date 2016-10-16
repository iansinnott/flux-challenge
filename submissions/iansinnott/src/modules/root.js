/* @flow */
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';

import planetMonitor, { incomingMessageEpic } from '../modules/planet-monitor';

export const epic = combineEpics(
  incomingMessageEpic,
);

export const reducer = combineReducers({
  planetMonitor,
});
