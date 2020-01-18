import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
// const About = props => {
//   const searchParams = new URLSearchParams(props.location.search);
//   const name = searchParams.get('name');
//   console.log(name);

//   return (
//     <div>
//       <h1>About</h1>
//       {name && (
//         <p>
//           name: {name}, {typeof name}
//         </p>
//       )}
//     </div>
//   );
// };

// qs
// const About = props => {
//   const { name } = queryString.parse(props.location.search); // 객체를 리턴
//   console.log(name);

//   return (
//     <div>
//       <h1>About</h1>
//       {name && (
//         <p>
//           name: {name}, {typeof name}
//         </p>
//       )}
//     </div>
//   );
// };

// hooks
const About = () => {
  const location = useLocation();
  const { name } = queryString.parse(location.search); // 객체를 리턴
  console.log(name);

  return (
    <div>
      <h1>About</h1>
      {name && (
        <p>
          name: {name}, {typeof name}
        </p>
      )}
    </div>
  );
};

export default About;
