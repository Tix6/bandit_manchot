import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadFruits } from './actions/';
import configureStore from './store/';
import fruitFactory from './factory';
import App from './components/App/';

console.log('mounting react app ...'); // eslint-disable-line no-console

const FRUIT_COUNT = 5;
const initialState = { fruits: fruitFactory({ quantity: FRUIT_COUNT }) };
const store = configureStore(initialState);

store.dispatch(loadFruits());

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(Root, document.getElementById('__TODO__'));
