import React, { useState } from 'react';

const UnControlledHook = () => {
  const [value, setValue] = useState('');
  const inputRef = React.createRef();

  const change = () => {
    setValue(inputRef.current.value);
  };

  const click = () => {
    console.log(value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} value={value} onChange={change} />
      <button onClick={click}>전송</button>
    </div>
  );
};

export default UnControlledHook;
