import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [ inputs, setInputs ] = useState({
    username: '',
    email: '',
  }); // 초기값 세팅
  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'publee',
      email: 'publizm@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@gmail.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@gmail.com'
    }
  ]);

  const nextId = useRef(4); // 컴포넌트가 리렌더링 될때마다 특정 값을 기억해야될때도 사용을 한다, 해당 변수의 값이 바뀔때 컴포넌트가 리렌더링 되지 않는다.

  const onCreate = e => {
    nextId.current += 1;
    const newUser = {
      id: nextId,
      username,
      email
    };

    setUsers([...users, newUser]);

    setInputs({
      username: '',
      email: '',
    });
  }

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
    </>
  );
}

export default App;