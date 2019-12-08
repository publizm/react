import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // getOwnPropertyNames : 해당하는 프로토타입에 대한 프로퍼티를 배열로 내보내준다.
    // App.prototype은 안에 함수를 가지고 있다.
    Object.getOwnPropertyNames(App.prototype).forEach(key => this[key] = this[key].bind(this));
    // this[key]의 this는 constructor의 this App이다.
  }

  add () {

  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text"/>
        </form>
        {/* {this.state.list.map(item => {

        })} */}
      </div>
    );
  }
}
  export default App;