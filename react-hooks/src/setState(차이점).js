import React, { useReducer, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // const [state, setState] = useState({});

  // 기존 클래스에서의 setState, 이전 state를 불러올 필요가 없다.
  // this.setState({
  //   age: '',
  //   fruit: '',
  //   todos: []
  // })

  // setState(prev => ({
  //   ...prev,
  //   age: '',
  //   fruit: '',
  //   todos: []
  // }))

  const reducer = (prevState, newState) => ({
    // 기존상태와 최신상태를 병합
    ...prevState,
    ...newState,
  });

  const [state, setState] = useReducer(reducer, {});

  setState({ lang: 'js' });
  setState({ new: 'React' });

  useEffect(() => {
    console.log({ count });
  }, [count]);

  return (
    <div className="App">
      <header></header>
      <button>+</button>
      <button>+</button>
    </div>
  );
}

export default App;
