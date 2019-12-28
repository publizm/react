import React, { useState, useEffect } from 'react';

// localstorage.setItem('data', JSON.stringify(obj))
// setItem은 무조건 string으로만 받을 수 있기때문에 JSON.stringify를 써줘서 변환해주어야한다.
// getItem은 문자열이 오기 때문에 JSON.parse로 변환
function useLocalStorage(key, init) {
  const [storedValue, setStoredValue] = useState(() => {
    // 항상 JSON.parse의 인수로 정상적인 객체로 들어와야 통과를 하기 때문에 방어코드로서 try/catch를 사용
    try {
      const item = window.localStorage.getItem(key);
      // window.localStorage.setItem(key, JSON.stringify(init));
      return item ? JSON.parse(item) : init;
    } catch (err) {
      console.error(err);
      return init;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}

export default function LocalStorage() {
  const [name, setName] = useLocalStorage('name', 'react');

  // JSX외에 확인할 수 있는 방법. (return외의 곳에서 확인하는 방법은 useEffect로 확인)
  useEffect(() => {
    setName('web');
  });

  return <></>;
}
