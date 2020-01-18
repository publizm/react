import React from 'react';
import styled, { css } from 'styled-components';

function MyButton({ className, children }) {
  return <button className={className}>MyButton {children}</button>;
}

export const StyledButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;
