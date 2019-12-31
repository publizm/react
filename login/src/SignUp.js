import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from './lib/api';
import Cookies from 'js-cookie';

const SignUp = props => {
  const { handleSubmit, register, watch, errors } = useForm();
  const [alreadyExist, setAlreadyExist] = useState(false);

  const onSubmit = async values => {
    const { success, msg } = await signUp(values);
    if (success) {
      props.history.push('/signin');
    } else if (msg === 'Username already exists.') {
      setAlreadyExist(true);
    }
  };

  return (
    <section>
      {alreadyExist && '이미 존재하는 아이디 입니다.'}
      <form
        // onSubmit(내장 props), handleSubmit(onSubmit) - 커스텀 hook의 함수
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <legend>회원가입 영역</legend>
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
            <label htmlFor="password1">비밀번호　　　</label>
            <input
              id="password1"
              name="password1"
              type="password"
              ref={register({
                required: 'Required',
              })}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div>
            <label htmlFor="password2">비밀번호 확인　</label>
            <input
              id="password2"
              name="password2"
              type="password"
              ref={register({
                required: 'Required',
                validate: value => {
                  return value === watch('password1');
                },
              })}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          {errors.password2 && '비밀번호가 일치하지 않습니다.'}

          <button type="submit">회원가입</button>
        </fieldset>
      </form>
    </section>
  );
};

export default SignUp;
