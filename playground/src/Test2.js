import React, { Component } from 'react';

export class Test2 extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      number: 0,
    };
  }

  increase() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  decrease() {
    this.setState({
      number: this.state.number - 1,
    });
  }
  render() {
    return (
      <>
        <div>{this.state.number}</div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </>
    );
  }
}

export default Test2;
