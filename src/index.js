import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import counterReducer from './reducer/CounterReducer';
import ColorReducer from './reducer/ColorReducer';
import { Provider } from 'react-redux';
import {myLogger} from './middleware/myLogger';

import reportWebVitals from './reportWebVitals';

const store = createStore(ColorReducer, applyMiddleware(myLogger));
//const store = createStore(ColorReducer, counterReducer);
console.log('Store Created');

ReactDOM.render(
  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();