import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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