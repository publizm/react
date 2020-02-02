import React, { Component } from 'react';
import PersonContext from '../contexts/PersonContext';
import Example4 from './Example4';

// 클래스 컴포넌트에서 사용하는 contextType
export class Example1 extends Component {
  static contextType = PersonContext;
  render() {
    return (
      <>
        <div>부모 - {JSON.stringify(this.context.persons)}</div>
        <Example4 parentContext={this.context.persons} />
      </>
    );
  }
}

export default Example1;
