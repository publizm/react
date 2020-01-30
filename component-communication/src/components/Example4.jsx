import React, { Component } from 'react';
import AreaContext from '../contexts/AreaContext';

// 클래스 컴포넌트에서 하위일때 받는방법
export class Example4 extends Component {
  static contextType = AreaContext;
  render() {
    return (
      <div>
        <p>
          Props로 전달받은 부모의 컨텍스트 -{' '}
          {JSON.stringify(this.props.parentContext)}
        </p>
        <p>자식의 컨텍스트 - {JSON.stringify(this.context)}</p>
      </div>
    );
  }
}

export default Example4;
