import React, { useState } from 'react';

export const useInput = (initailValue, validator) => {
  console.log('validator', validator);
  const [value, setValue] = useState(initailValue);

  const onChange = e => {
    const { value } = e.target;

    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

// 사용예시
// export default function CustomInput() {
//   // const maxLength = value => value.length <= 10;
//   const maxLength = value => !value.includes('@');
//   const name = useInput('Mr.', maxLength);
//   return (
//     <div>
//       <h1>UseInputs</h1>
//       <input {...name} placeHolder="Name" type="text" />
//     </div>
//   );
// }
