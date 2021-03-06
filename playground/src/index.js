import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Test from './Test';
import DatePicker from './DatePicker';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <DatePicker />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
