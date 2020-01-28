import { useState, useEffect } from 'react';

// 사용은 app.js를 확인
export default function useWindowWidth() {
  // 초기화
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  // setter함수만 반환할때
  return width;

  // useState방식의 리턴
  // return [width, setWidth]
}
// 컴포넌트, 커스텀 훅 안에만 useState와 Effect를 사용할 수 있다.
