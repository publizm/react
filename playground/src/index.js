import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Test2 from './Test2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Test2 />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
