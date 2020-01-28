import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PersonContext from './contexts/PersonContext';

const persons = [
  { id: 0, name: 'mark', age: 38 },
  { id: 1, name: 'hanna', age: 27 },
];

ReactDOM.render(
  <PersonContext.Provider value={persons}>
    <App />
  </PersonContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
