// Stale Clousure problem
// 즉시실행함수를 사용하여 _val을 보호
// IIFE: Immediately invoked function expressions
// Module Pattern
const React = (function() {
  let _val;

  return {
    render(Component) {
      const Comp = Component();
      Comp.render(); // Counter 컴포넌트의 render 함수호출
      return Comp;
    },
    useState(init) {
      _val = _val || init;

      function setState(newVal) {
        _val = newVal;
      }

      return [_val, setState];
    },
  };
})();

const { useState } = React;
function Counter() {
  const [count, setCount] = useState(0);
  return {
    click: () => setCount(count + 1),
    render: () => console.log('render', { count }),
  };
}

let App;
App = React.render(Counter);
App.click();
App = React.render(Counter);
App.click();
App = React.render(Counter);

// query 함수를 실행 시켜야만하는 문제가 있다.
// function useState(init) {
//   let _val = init;

//   function state() {
//     return _val;
//   }

//   function setState(newVal) {
//     _val = newVal;
//   }

//   return [state, setState];
// }

// const [query, setQuery] = useState('여행');

// console.log(query());
// setQuery('크리스마스');
// console.log(query());
