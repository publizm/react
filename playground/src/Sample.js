import React, { Component } from 'react';

const Name = ({ name }) => {
  return <div>Hi! {name}</div>;
};

Name.defaultProps = {
  name: 'publizm',
};

export default Name;
