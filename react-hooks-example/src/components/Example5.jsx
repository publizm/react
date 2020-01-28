import React, { useEffect } from 'react';

// 클레스의 라이프사이클
const Example5 = () => {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // componentDidmount() 렌더된 직후
    // componentDidUpdate() 의존성 배열이 없을 시 업데이트될때마다 호출
    // componentDidUpdate는 의존성 배열이 없어 if문으로 따로 분기처리를 해주었어야 됬었다.
    return () => {
      // WillUnmount를 사용하려면 의존성배열이 빈배열이여야한다.
      // componentWillUnmount,
    };
  }, []); // 렌더를 일으키는 아이, 주로 props, state

  useEffect(() => {
    // DidUpdate
  }, [count]);

  useEffect(() => {
    // DidMount
  }, []);

  useEffect(() => {
    return () => {
      // WillUnmount
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={this.click}>Click me</button>
    </div>
  );
};

export default Example5;
