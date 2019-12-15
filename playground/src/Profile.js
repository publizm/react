import React from 'react';

const profileData = {
  publee: {
    name: '이철환',
    description: '프론트엔드 개발자'
  },
  jinsook: {
    name: '최진숙',
    description: '회계업무 담당자'
  }
}

const Profile = ({ match }) => {
  const { username } = match.params;

  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;