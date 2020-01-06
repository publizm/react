import React, { useContext, createContext } from 'react';

export default function Context() {
  // provider 없이 하나의 파일로 빼서 export 하여 사용할 수 있다.
  // 다만, 한번만 provider 묶어주면 createContext를 매번 불러올 필요 없다는 이점이 있다, 이때 props로 전달되는 것이 아니라는 점을 알아두자
  const ThemeContext = createContext('travel');
  const theme = useContext(ThemeContext);

  return <>{theme}</>;
}
