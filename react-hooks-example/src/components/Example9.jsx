import React, { useState, useMemo } from 'react';

const Example9 = () => {
  const [value, setValue] = useState('');
  const [persons] = useState([
    { name: 'Mark', age: 38 },
    { name: 'Hanna', age: 27 },
  ]);

  function change(e) {
    console.log('change');
    setValue(e.target.value);
  }

  function getSum(persons) {
    console.log('getSum');
    return persons.map(person => person.age).reduce((a, b) => a + b, 0);
  }

  const sum = getSum(persons);
  // const sum = useMemo(() => getSum(persons), [persons]);

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <p>{sum}</p>
    </div>
  );
};

export default Example9;
