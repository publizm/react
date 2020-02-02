import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
// import { addTodo } from './actions';
// import ReduxContext from './contexts/ReduxContext';

// console.log(store);

// // dispatch를 날리면 알림이 온다. 함수를 넣으면 콜백함수가 된다.
// // unsubscribe를 실행하면 unsubscribe를 하게된다.
// const unsubscribe = store.subscribe(() => {
//   console.log('subscribe');
//   console.log(store.getState());
// });

// // 액션을 날릴땐 action 생성자함수를 넣어주어야 한다.
// store.dispatch(addTodo('병원가기'));
// store.dispatch(addTodo('학원가기'));

// react-redux 사용없이 react 연결
// store에 변동이 생기면 subscribe를 활용하여 제 랜더링

store.subscribe(() => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
