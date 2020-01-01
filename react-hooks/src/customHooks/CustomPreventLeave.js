import React from 'react';

export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

// 사용예시
// export default function Custom() {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <>
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>UnProtect</button>
//     </>
//   );
// }
