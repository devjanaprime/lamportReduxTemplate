import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import * as serviceWorker from './serviceWorker';

const reducerInitialState = 0;
// set up reducer before you can create a store
const myReducer = ( state=reducerInitialState, action )=>{
  console.log( 'myReducer:', state, action );
  return state;
}
// create store with reducer, to be provided to app
const myStore = createStore( myReducer );

ReactDOM.render(
  <Provider store={ myStore }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
