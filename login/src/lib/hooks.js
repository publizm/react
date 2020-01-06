// 전역적으로 사용할 커스텀 훅
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

// 로그인이 되었는지 체크하는 hook
export const useAuthed = () => {
  const [authed, setAuthed] = useState(() => {
    // 쿠키에 세션이 담겨잇는지 체크 하여 초기값을 생성
    try {
      // 백엔드 쪽에서 sign 하여 만들어진다.
      const session = Cookies.get('session');
      const key = process.env.REACT_APP_JWT_KEY;
      const res = jwt.verify(session, key); // decoded 된 값을 반환.
      return res;
    } catch (err) {
      return false;
    }
  });

  return authed;
};
