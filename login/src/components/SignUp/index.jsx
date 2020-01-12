import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from '../../libs/api';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>회원가입</legend>
        {alreadyExist && '이미 존재하는 아이디입니다.'}
        <div className="col">
          <label htmlFor="username">이메일</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={register({
              required: '필수 입력사항 입니다.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: '유효하지 않는 이메일 형식입니다.',
              },
              maxLength: {
                value: 20,
                message: '글이 넘침',
              },
            })}
            placeholder="이메일을 입력해주세요"
          />
          <p className="notice">{errors.username && errors.username.message}</p>
        </div>
        <div className="col">
          <label htmlFor="password1">비밀번호</label>
          <input
            type="password"
            id="password1"
            name="password1"
            ref={register({
              required: '필수 입력사항 입니다.',
            })}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="col">
          <label htmlFor="password2">비밀번호 확인</label>
          <input
            type="password"
            name="password2"
            id="password2"
            ref={register({
              required: '필수입력사항 입니다.',
              validate: value => {
                return value === watch('password1');
              },
            })}
            placeholder="비밀번호를 입력해주세요"
          />
          <p className="notice">{errors.password2 && '비밀번호가 일치하지 않습니다.'}</p>
        </div>
      </fieldset>
      <button type="submit" className="submit-btn">
        확인
      </button>
    </form>
  );
};

export default SignUp;
