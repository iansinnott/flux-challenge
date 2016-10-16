/* @flow */
import { Map } from 'immutable';
import type { Action } from 'redux';
import type { Epic } from 'redux-observable';
import { createWebSocketObservable } from '../../lib/utils.js';

const prefix = str => `flux-challenge/planet-monitor/${str}`;

/* Action Types
 * ======================================================================= */
const MESSAGE_RECEIVED = prefix('MESSAGE_RECEIVED');

/* Actions
 * ======================================================================= */
export const messageReceived = (payload: any): Action => ({
  type: MESSAGE_RECEIVED,
  payload,
});

/* Epics
 * ======================================================================= */

/**
 * Connect to planet monitor websocket and dispatch all incoming updates.
 *
 * NOTE: Epics need not use the passed action stream. They just need to
 * return an action stream.
 */
export const incomingMessageEpic: Epic<Action> = () =>
  createWebSocketObservable('ws://localhost:4000')
    .map(msg => JSON.parse(msg.data.toString()))
    .map(messageReceived);

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
