import React from 'react';

const Sample = (props) => {
  console.log(props);
  return (
    <div>
      {props.data}
    </div>
  );
}

export default Sample;