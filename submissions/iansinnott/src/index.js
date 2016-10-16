/* @flow */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import 'rxjs'; // Import all Rx operators

import App from './components/App.js';
import store from './redux/store.js'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
