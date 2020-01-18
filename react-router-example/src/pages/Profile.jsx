import React from 'react';
import { useParams } from 'react-router-dom';

// const Profile = props => {
//   const { id } = props.match.params;
//   return (
//     <div>
//       Profile
//       <div>{id && <p>id: {(id, typeof id)}</p>}</div>
//     </div>
//   );
// };

const Profile = () => {
  const { id } = useParams();
  return (
    <div>
      Profile
      <div>{id && <p>id: {(id, typeof id)}</p>}</div>
    </div>
  );
};

export default Profile;
