import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import ColorReducer from './reducer/ColorReducer';
import chooseColorReducer from './reducer/ChooseColorReducer'
import counterReducer from './reducer/CounterReducer';
import {Provider} from 'react-redux';
//import {myLogger}  from './middleware/myLogger';


//import {myLogger2} from './middleware/mylogger2'
//import logger from 'redux-logger'
//import postReducer from './reducer/postReducer';
//import Posts from './component/Posts';

import reportWebVitals from './reportWebVitals';

const store = createStore(ColorReducer);
//const store = createStore(chooseColorReducer);
//const store = createStore(ColorReducer, applyMiddleware(myLogger));

console.log("store created");

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
