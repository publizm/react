import React, { useRef, useEffect } from 'react';

export const useClick = onClick => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      if (typeof onClick !== 'function') {
        return;
      }

      element.current.addEventListener('click', onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);

  return element;
};

// 사용예시
// export default function Custom() {
//   const sayHello = () => {
//     console.log('say HEllo')
//   }
//   const sayBye = () => {
//     console.log('say HEllo')
//   }
//   const hi = useClick(sayHello);
//   const bye = useClick(sayBye);
//   return (
//     <>
//       <h1 ref={hi}>Hi!</h1>
//       <h2 ref={bye}>Hi!</h2>
//     </>
//   );
// }
