import React, { useState, useCallback } from 'react';

const Person = React.memo(({ index, name, age, click }) => {
  console.log(name, age);
  function onClick() {
    click(index);
  }
  return (
    <li>
      {name}, {age} <button onClick={onClick}>한해가 갔다.</button>
    </li>
  );
});

const Example10 = () => {
  const [value, setValue] = useState('');
  const [persons, setPersons] = useState([
    { name: 'Mark', age: 38 },
    { name: 'Hanna', age: 27 },
  ]);

  function change(e) {
    setValue(e.target.value);
  }

  const click = useCallback(
    index => {
      const newPersons = [...persons];
      newPersons[index].age = newPersons[index].age + 1;
      setPersons(newPersons);
    },
    [persons],
  );

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <ul>
        {persons.map((person, index) => (
          <Person
            index={index}
            key={index}
            name={person.name}
            age={person.age}
            click={click}
          />
        ))}
      </ul>
    </div>
  );
};

export default Example10;
