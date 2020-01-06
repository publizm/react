import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { signOut } from './lib/api';
import { useAuthed } from './lib/hooks';

const SignOut = props => {
  // signOut함수는 async가 붙은 함수이지만, 아래의 내용들은 순서가 따로 필요 없으니 asnyc를 안붙여줘도 된다.
  const session = Cookies.get('session');
  signOut(session);
  // 1. 쿠키를 썻기 떄문에 쿠키를 삭제해준다.
  // 서버에서 쿠키를 삭제해주는 로직이 없다면 따로 클라이언트에서 cookie를 삭제해준다.
  Cookies.remove('session');
  // 2. 서버가 자체적으로 쿠키를 만들어서 보내주는 경우에는 api call만 날리면된다.
  props.history.push('/');
  return <></>;
};

export default SignOut;
