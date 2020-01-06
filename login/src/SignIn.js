import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from './lib/api';
import Cookies from 'js-cookie';

const SignIn = props => {
  const { handleSubmit, register, watch, errors } = useForm();

  const onSubmit = async values => {
    const { success, token } = await signIn(values);
    if (success) {
      // 백엔드가 만들어주지 않았을 경우에 token을 받아서 따로 쿠키에 저장해줘야된다.
      // Cookies.set('session', token.split(' ')[1]);
      props.history.push('/user');
    }
  };

  return (
    <section>
      <form
        // onSubmit(내장 props), handleSubmit(onSubmit) - 커스텀 hook의 함수
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <legend>로그인 영역</legend>
          <div>
            <label htmlFor="username">이메일　　　　</label>
            <input
              id="username"
              name="username"
              type="text"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address',
                },
              })}
              placeholder="이메일을 입력해주세요"
            />
            {errors.username && errors.username.message}
          </div>
          <div>
            <label htmlFor="password">비밀번호　　　</label>
            <input
              id="password"
              name="password"
              type="password"
              ref={register({
                required: 'Required',
              })}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          <button type="submit">로그인</button>
        </fieldset>
      </form>
    </section>
  );
};

export default SignIn;
