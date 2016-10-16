/* @flow */
import { Map } from 'immutable';
import type { Action } from 'redux';
import type { Observable } from 'rxjs';
import type { Epic, ActionsObservable } from 'redux-observable';

/* Action Types
 * ======================================================================= */
const MESSAGE_RECEIVED = `flux-challenge/planet-monitor/MESSAGE_RECEIVED`;

/* Actions
 * ======================================================================= */
export const messageReceived = (payload: any): Action => ({
  type: MESSAGE_RECEIVED,
  payload,
});

/* Epics
 * ======================================================================= */
export const messageEpic: Epic<Action> = (action$) =>
  action$.ofType(MESSAGE_RECEIVED)
    .delay(600)
    .mapTo({ type: 'message received' });

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
