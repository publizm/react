import React, { useEffect } from 'react';

function Test() {
  useEffect(() => {
    console.log('컴포넌트가 화면에서 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

  return <div>Hello world</div>;
}

export default Test;
