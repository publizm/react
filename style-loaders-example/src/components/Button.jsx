import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

// console.log(classNames('foo', 'bar')); // "foo bar"
// console.log(classNames('foo', 'bar', 'baz')); // "foo bar baz"

// console.log(classNames({ foo: true }, { bar: true })); // "foo bar"
// console.log(classNames({ foo: true }, { bar: false })); // "foo"
// console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')); // "bar 1"
// console.log(classNames(styles.button, styles.loading)); // Button_button__2Ce79 Button_loading__XEngF

const cx = classNames.bind(styles); // style module을 바인드

console.log(cx);

const Button = props => {
  console.log(styles);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    // <button className={`${styles.button} ${styles.loading}`} {...props}>
    // <button
    //   className={loading ? `${styles.button} ${styles.loading}` : styles.button}
    //   {...props}
    // >
    //   버튼
    // </button>

    // <button
    //   className={
    //     loading ? classNames(styles.button, styles.loading) : styles.button
    //   }
    //   {...props}
    // >
    //   버튼
    // </button>

    // bind 사용
    <button className={cx('button', { loading })} {...props}>
      버튼
    </button>
  );
};

export default Button;
