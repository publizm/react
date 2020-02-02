import React, { useState, useRef, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { addTodo, completeTodo, startLoading, endLoading } from './actions';
import ReduxContext from './contexts/ReduxContext';
import { connect } from 'react-redux';

// react-redux없이 contextAPI와 redux를 활용한 예시
// function App() {
//   const context = useContext(ReduxContext);
//   let [state, setState] = useState(context.getState());
//   const inputRef = useRef();
//   const { todos, loading } = state;

//   function add() {
//     const text = inputRef.current.value;
//     context.dispatch(startLoading());
//     context.dispatch(addTodo(text));
//     context.dispatch(endLoading());
//   }

//   function done(index) {
//     context.dispatch(startLoading());
//     context.dispatch(completeTodo(index));
//     context.dispatch(endLoading());
//   }

//   useEffect(() => {
//     const unsubscribe = context.subscribe(() => {
//       setState(context.getState());
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <input type="text" ref={inputRef} />
//         <button onClick={add}>추가</button>
//         {loading && <h2>로딩중...</h2>}
//         <ul>
//           {todos &&
//             todos.map((todo, index) => (
//               <li key={index}>
//                 {todo.text}{' '}
//                 {todo.done ? (
//                   '완료'
//                 ) : (
//                   <button onClick={() => done(index)}>끝</button>
//                 )}
//               </li>
//             ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// react-redux와 redux를 활용한 예시 connect(hoc)활용
function App(props) {
  console.log(props);
  const inputRef = useRef();

  function add() {
    const text = inputRef.current.value;
    console.log(text);
    props.addTodo(text);
  }

  function done(index) {
    props.completeTodo(index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" ref={inputRef} />
        <button onClick={add}>추가</button>
        <ul>
          {props.todos.map((todo, index) => (
            <li key={index}>
              {todo.text}{' '}
              {todo.done ? (
                '완료'
              ) : (
                <button onClick={() => done(index)}>끝</button>
              )}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  },
  completeTodo: index => {
    dispatch(completeTodo(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
