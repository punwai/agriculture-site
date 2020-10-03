import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import basketReducer from './basket'
import userReducer from './user'
import { loadState, saveState } from './localStorage'
import "./i18n";

// const SET_ID = 'ADD_TODO'
// const UNSET_ID = 'ADD_TODO'

// /*
//  * other constants
//  */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }


// /*
//  * action creators
//  */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

// function login_reducer(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }


// const store = createStore(login_reducer);

const persistedState = loadState();

const rootReducer = combineReducers({basket: basketReducer, user: userReducer})

const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveState({
    basket: store.getState().basket
  });
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

