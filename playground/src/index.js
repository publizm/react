import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Test from './Test';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
