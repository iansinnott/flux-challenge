/* @flow */
import { Map } from 'immutable';
import type { Action } from 'redux';
import type { Epic } from 'redux-observable';

const prefix = str => `flux-challenge/planet-monitor/${str}`;

/* Action Types
 * ======================================================================= */
const INIT = prefix('INIT');
const MESSAGE_RECEIVED = prefix('MESSAGE_RECEIVED');

/* Actions
 * ======================================================================= */
export const messageReceived = (payload: any): Action => ({
  type: MESSAGE_RECEIVED,
  payload,
});

/* Epics
 * ======================================================================= */
export const incomingMessageEpic: Epic<Action> = (action$) =>
  action$.ofType(INIT)
    .delay(600)
    .mapTo({ type: 'messages initialized' });

/* Reducers
 * ======================================================================= */
const initialState = Map({
  id: null,
  name: '',
});

export default function reducer(state: Map<string, *> = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
  case MESSAGE_RECEIVED:
    return state.merge(payload);
  default:
    return state;
  }
}
