import React, { useEffect } from 'react';

export const useBeforeLeave = onBefore => {
  const handle = event => {
    if (typeof onBefore !== 'function') return;
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => {
      document.removeEventListener('mouseleave', handle);
    };
  }, []);
};

// 사용예시
// export default function Custom() {
//   const begForLife = () => alert("Plz don't leave");
//   useBeforeLeave(begForLife);
//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }
