import React, { useState, useRef, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { addTodo } from './actions';
import ReduxContext from './contexts/ReduxContext';

function App({ store }) {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  function add() {
    const text = inputRef.current.value;
    store.dispatch(addTodo(text));
    console.log(store.getState().todos);
    setTodos(store.getState().todos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" ref={inputRef} />
        <button onClick={add}>추가</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{JSON.stringify(todo)}</li>
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
