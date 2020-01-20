import React, { Component } from 'react';

export class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  change = e => {
    // onChange이벤트가 발생하면 this.change가 이벤트를 담아서 보내게 된다
    console.log('e', e);
    console.log(e.target, typeof e.target);
    console.log(e.target.value);

    this.setState({
      ...this.state,
      value: e.target.value,
    });
  };

  click = () => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        {/* 상태와 싱크를 맞추는 행위를 컨트롤드라 한다 */}
        {/* value를 state로 관리하므로 onChange없이 사용할 수 없다고 한다. */}
        {/* onChange가 꼭 들어가야한다. */}
        <input type="text" value={this.state.value} onChange={this.change} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }
}

export default Controlled;
