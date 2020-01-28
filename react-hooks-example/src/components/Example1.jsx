import React, { Component } from 'react';

export class Example1 extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }

  click = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default Example1;
