/* @flow */
import { Map } from 'immutable';
import type { Action } from 'redux';

/* Action Types
 * ======================================================================= */
const UPDATE_RECEIVED = `flux-challenge/planet-monitor/UPDATE_RECEIVED`;

/* Actions
 * ======================================================================= */
export const updateReceived = (payload: any): Action => ({
  type: UPDATE_RECEIVED,
  payload,
});

/* Reducers
 * ======================================================================= */
const initialState = Map({
  planetName: '',
});

export default function reducer(state: Map<string, *> = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
  case UPDATE_RECEIVED:
    return state.merge(payload);
  default:
    return state;
  }
}
