import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Refing from './Refing';
import * as serviceWorker from './serviceWorker';
import UseCallback from './UseCallback/useCallback';
import UseMemo from './UseMemo/useMemo';
import Test from './test';
import UseReducer from './UseReducer/UseReducer';
import AppContext from './AppContext';

ReactDOM.render(<AppContext />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
