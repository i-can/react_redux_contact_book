import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

//
import RootReducer from './RootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(RootReducer,composeWithDevTools())

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider> 
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
