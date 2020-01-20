import React, { useState } from 'react';

const ControlledHook = () => {
  const [value, setValue] = useState('');

  const change = e => {
    setValue(e.target.value);
  };

  const click = () => {
    console.log(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <button onClick={click}>전송</button>
    </div>
  );
};

export default ControlledHook;
