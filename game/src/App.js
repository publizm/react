import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [mySelect, setMySelect] = useState('');
  const [computerSelect, setComputerSelect] = useState('');
  const [whoWins, setWins] = useState('');
  const select = useRef();

  const runGame = () => {
    const value = select.current.value;
    const items = ['가위', '바위', '보'];
    const randomIdx = Math.floor(Math.random() * items.length);
    setMySelect(value);
    setComputerSelect(items[randomIdx]);
  };

  useEffect(() => {
    if (mySelect === '가위') {
      if (computerSelect === '가위') setWins('무승부');
      if (computerSelect === '바위') setWins('컴퓨터 승리');
      if (computerSelect === '보') setWins('유저 승리');
    } else if (mySelect === '바위') {
      if (computerSelect === '가위') setWins('유저 승리');
      if (computerSelect === '바위') setWins('무승부');
      if (computerSelect === '보') setWins('컴퓨터 승리');
    } else if (mySelect === '보') {
      if (computerSelect === '가위') setWins('컴퓨터 승리');
      if (computerSelect === '바위') setWins('유저 승리');
      if (computerSelect === '보') setWins('무승부');
    }
  }, [mySelect, computerSelect]);

  return (
    <div>
      {whoWins}
      <select ref={select} onChange={runGame}>
        <option value="가위">가위</option>
        <option value="바위">바위</option>
        <option value="보">보</option>
      </select>
    </div>
  );
};

export default App;
