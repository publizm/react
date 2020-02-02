import React, { useState, useRef, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { addTodo, completeTodo, startLoading, endLoading } from './actions';
import ReduxContext from './contexts/ReduxContext';

function App() {
  const context = useContext(ReduxContext);
  let [state, setState] = useState(context.getState());
  const inputRef = useRef();
  const { todos, loading } = state;

  function add() {
    const text = inputRef.current.value;
    context.dispatch(startLoading());
    context.dispatch(addTodo(text));
    context.dispatch(endLoading());
  }

  function done(index) {
    context.dispatch(startLoading());
    context.dispatch(completeTodo(index));
    context.dispatch(endLoading());
  }

  useEffect(() => {
    const unsubscribe = context.subscribe(() => {
      setState(context.getState());
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" ref={inputRef} />
        <button onClick={add}>추가</button>
        {loading && <h2>로딩중...</h2>}
        <ul>
          {todos &&
            todos.map((todo, index) => (
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

// function App() {
//   const inputRef = useRef();
//   const store = ReduxContext;

//   const todos = useSelector(state => state.todos);

//   function add() {
//     const text = inputRef.current.value;
//     store.dispatch(addTodo(text));
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <input type="text" ref={inputRef} />
//         <button onClick={add}>추가</button>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>{todo.text}</li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

export default App;
