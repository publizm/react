import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button2 = ({ children, active, size, ...rest }) => {
  console.log(size);
  return (
    <button className={classNames('button', size, { active })} {...rest}>
      {children}
    </button>
  );
};

Button2.defaultProps = {
  size: 'medium',
};

export default Button2;
