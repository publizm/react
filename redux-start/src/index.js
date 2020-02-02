import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
// import ReduxContext from './contexts/ReduxContext';
// import { addTodo } from './actions';
import { Provider } from 'react-redux';

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

// react-redux 사용없이 react 연결해보기
// 어찌됬건 props로 store를 계속 내려줘야하므로, 장점이 딱히 없음
// store에 변동이 생기면 subscribe를 활용하여 제 랜더링

// store.subscribe(() => {
//   ReactDOM.render(<App store={store} />, document.getElementById('root'));
// });

// ReactDOM.render(<App store={store} />, document.getElementById('root'));

// react-redux없이 contextAPI와 redux를 활용한 예시
// reducer의 집합이 담긴 store를 ReduxContext의 value로 지정하여 Provider를 통해 하위 컴포넌트에 전달
// ReactDOM.render(
//   <ReduxContext.Provider value={store}>
//     <App />
//   </ReduxContext.Provider>,
//   document.getElementById('root'),
// );

// react-redux와 redux를 활용한 예시
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
