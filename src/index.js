import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import { newGame } from "./actions";

render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// default human as X
store.dispatch(newGame('X'));

registerServiceWorker();
