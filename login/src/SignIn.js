import React from 'react';

const SignIn = props => {
  return (
    <section>
      <form>
        <fieldset>
          <legend>로그인 영역</legend>
          <input type="text" placeholder="이메일주소를 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <button type="button">로그인</button>
        </fieldset>
      </form>
    </section>
  );
};

export default SignIn;
