import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example8 from './components/Example8';
import Example9 from './components/Example9';
import Example10 from './components/Example10';
import Example11 from './components/Example11';
import useWindowWidth from './hooks/useWindowWidth';
import withHasMounted from './hocs/withHasMounted';
import useHasMounted from './hooks/useHasMounted';

function App({ hasMounted }) {
  // 보통 window에 대한 이벤트는 최상위인 App.js에서 호출하여 사용한다.
  // 이유는 호출된 컴포넌트에 바인딩 시키는데 Example 컴포넌트에 내에 넣게되면 Example 컴포넌트에 전부 바인딩 되기 때문이다.
  // 지금 상황에서는 useWindowWidth는 App.js가 사라질때 cleanup함수가 호출된다.
  const width = useWindowWidth();
  const hasMounted2 = useHasMounted();
  return (
    <div className="App">
      <header className="App-header">
        <p>{width}</p>
        <p>{hasMounted && 'mounted'}</p>
        <p>{hasMounted2 && 'hasMounted2'}</p>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example8 />
        <Example9 /> */}
        <Example10 />
        {/* <Example11 /> */}
      </header>
    </div>
  );
}

export default withHasMounted(App);
