import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';

function CreateUser() {
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  }

  const dispatch = useContext(UserDispatch);
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="계정명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser);