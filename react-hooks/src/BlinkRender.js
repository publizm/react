import React, { useState, useLayoutEffect } from 'react';

export default function BlinkRender() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return <button onClick={() => setValue(0)}>value: {value}</button>;
}
