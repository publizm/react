import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // state = {}; this를 바인딩할 필요가 없을때 클래스 필드를 사용할 수 있다. 이 문법은 React에서 정했다.

  add () {
    this.setState({name : 'hi'}, () => {
      console.log(this.state.name) // 이때 this.state.name은 업데이트된 내용 업데이트된 내용을 수정할때 한다.
    });
    console.log(this.state.name); // setState는 비동기 처리로 되므로 이때 this.state.name은 변경이전의 내용일 수 있다.
  }

  render() {
    return (
      <div className="App">
        {list.map(function(item) {
          return <div>{item.title}</div>;
        })}
      </div>
    );
  }
}
  export default App;