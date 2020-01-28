import React, { Component } from 'react';
import PersonContext from '../contexts/PersonContext';

export class Example2 extends Component {
  // Type 사용방법 1
  static contextType = PersonContext;

  render() {
    return <div>{JSON.stringify(this.context)}</div>;
    // this.context가 value의 값이 된다
  }
}

// Type 사용방법 2
// Example2.contextType = PersonContext;

export default Example2;
