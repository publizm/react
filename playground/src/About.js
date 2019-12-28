import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    console.log('소개 컴포넌트가 화면에서 나타남');
    return () => {
      console.log('소개 컴포넌트가 화면에서 사라짐');
    };
  }, []);
  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지</p>
    </div>
  );
};

export default About;
