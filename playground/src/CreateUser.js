import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  console.log('create user');
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