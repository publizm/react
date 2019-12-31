import React, { useState } from 'react';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    const { value } = e.target;
    setValue(value);
  }

  return { value, onChange };
}

export default function CustomInput() {
  const name = useInput('');
  console.log(name);
  return (
    <div>
      <h1>UseInputs</h1>
      {/* 동일 */}
      {/* <input value={name.value} onChange={name.onChange} type="text" /> */}
      <input {...name} type="text" />
      {name.value}
    </div>
  );
}
