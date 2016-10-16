/* @flow */
import { createStore } from 'redux';

import { reducer } from '../modules/root.js';

const store = createStore(reducer);

export default store;
