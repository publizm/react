import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from '../../libs/api';
import Cookies from 'js-cookie';

const SignIn = props => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async ({ username, password }) => {
    const { success, token } = await signIn({ username, password });
    if (success) {
      Cookies.set('session', token.split(' ')[1]);

      props.history.push('/user');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>로그인</legend>
        <div className="col">
          <label htmlFor="username">이메일</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={register({
              required: '필수 입력사항 입니다.',
            })}
            placeholder="이메일을 입력해주세요"
          />
          <p className="notice">{errors.username && '필수 입력사항입니다.'}</p>
        </div>
        <div className="col">
          <label htmlFor="password1">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={register({
              required: '필수 입력사항 입니다.',
            })}
            placeholder="비밀번호를 입력해주세요"
          />
          <p className="notice">{errors.password && '필수 입력사항입니다.'}</p>
        </div>
      </fieldset>
      <button type="submit" className="submit-btn">
        로그인
      </button>
    </form>
  );
};

export default SignIn;
