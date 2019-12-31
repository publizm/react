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
  const input = useInput('');
  console.log(input);
  return (
    <div>
      <h1>UseInputs</h1>
      {/* 동일 */}
      {/* <input value={name.value} onChange={name.onChange} type="text" /> */}
      <input {...input} type="text" />
      {input.value}
    </div>
  );
}
