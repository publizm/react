import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('홈 컴포넌트가 화면에서 나타남');
    return () => {
      console.log('홈 컴포넌트가 화면에서 사라짐');
    };
  }, []);
  return (
    <div>
      <h1>홈</h1>
      <p>Home 페이지</p>
    </div>
  );
};

export default Home;
