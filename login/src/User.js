import React, { useEffect } from 'react';
import { useAuthed } from './lib/hooks';

const User = props => {
  const authed = useAuthed();
  console.log(authed);
  return <div>유저페이지 입니다</div>;
};

export default User;
