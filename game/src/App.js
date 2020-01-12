import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [myPick, setMyPick] = useState('');
  const [computerPick, setComputerPick] = useState('');
  const [wins, setWins] = useState('');
  const [computerWins, setComputerWins] = useState(0);
  const [userWins, setUserWins] = useState(0);
  const [history, setHistory] = useState([]);
  const select = useRef();

  const runGame = () => {
    const value = select.current.value;
    const items = ['가위', '바위', '보'];
    const randomIdx = Math.floor(Math.random() * items.length);
    setMyPick(value);
    setComputerPick(items[randomIdx]);
  };

  useEffect(() => {
    let wins = '';
    if (myPick === '가위') {
      if (computerPick === '가위') wins = '무승부';
      if (computerPick === '바위') wins = '컴퓨터 승리';
      if (computerPick === '보') wins = '유저 승리';
    } else if (myPick === '바위') {
      if (computerPick === '가위') wins = '유저 승리';
      if (computerPick === '바위') wins = '무승부';
      if (computerPick === '보') wins = '컴퓨터 승리';
    } else if (myPick === '보') {
      if (computerPick === '가위') wins = '컴퓨터 승리';
      if (computerPick === '바위') wins = '유저 승리';
      if (computerPick === '보') wins = '무승부';
    }

    console.log('wins', wins);

    if (wins) {
      setWins(wins);
      setHistory([...history, `${wins} - 컴퓨터: ${computerPick}, 유저: ${myPick}`]); // wins을 쓰게되면 이전 상태가 올라가서 X

      if (wins === '컴퓨터 승리') {
        setComputerWins(computerWins + 1);
      } else if (wins === '유저 승리') {
        setUserWins(userWins + 1);
      }
    }
  }, [myPick, computerPick]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <div>
      <h2>{wins}</h2>
      <h3>
        유저 승리 횟수 : {userWins} vs 컴퓨터 승리 횟수 : {computerWins}
      </h3>

      <select ref={select} onChange={runGame}>
        <option value="가위">가위</option>
        <option value="바위">바위</option>
        <option value="보">보</option>
      </select>
      {history.map((content, index) => (
        <h2 key={index}>{content}</h2>
      ))}
    </div>
  );
};

export default App;
