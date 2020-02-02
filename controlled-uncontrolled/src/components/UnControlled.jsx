import React, { Component } from 'react';

export class UnControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // document.querySelector와 같은 dom요소에 접근하는 것을 위해 ref가 생김
  // 상태에 넣는 것이 아니다
  inputRef = React.createRef(); // 최초 선언시에는 null이 들어와있다가 render 이후에 ref={}를 작동하여 current 자리에 해당 DOM 꽂아준다.

  render() {
    console.log(this.inputRef);
    return (
      <div>
        <input type="text" ref={this.inputRef} onMouseOver={this.mouseOver} />
        <button onClick={this.click}>전송</button>
        {/* 전송버튼을 클릭했을당시의 input의 value만 체크하면 된다. */}
      </div>
    );
  }

  mouseOver = () => {
    this.inputRef.current.focus();
  };

  click = () => {
    console.log(this.inputRef);
    console.log(this.inputRef.current.value);
  };
}

// 옛날방식 - ref가 유지하기가 어려워서 current를 관리하게끔 위의 방식으로 변경
// export class UnControlled extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   click = () => {
//     console.log(this.input.value);
//   };

//   input;

//   render() {
//     console.log(this.inputRef);
//     return (
//       <div>
//         <input
//           type="text"
//           ref={ref => {
//             this.input = ref;
//           }}
//         />
//         <button onClick={this.click}>전송</button>
//         {/* 전송버튼을 클릭했을당시의 input의 value만 체크하면 된다. */}
//       </div>
//     );
//   }
// }

export default UnControlled;
