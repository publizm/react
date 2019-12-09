import React, { useState } from 'react';

function InputWrapper() {
  const [ input, setInput ] = useState({
    name: '',
    nickname: '',
  });

  const {name, nickname} = input;

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value
    });
  };

  const onReset = () => {
    setInput({
      ...input,
      name: '',
      nickname: ''
    });

  }

  return (
    <>
      <input type="text" name="name" placeholder="이름을 입력해주세요." onChange={onHandleChange} value={name}/>
      <input type="text" name="nickname" placeholder="닉네임을 입력해주세요." onChange={onHandleChange} value={nickname} />
      <button type="button" onClick={onReset}>Reset</button>
      <h1>
        결과값:
      </h1>
      {name}({nickname})
    </>
  );
}

export default InputWrapper;