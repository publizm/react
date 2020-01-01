import React from 'react';

export const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!(onConfirm && onCancel)) return;
  if (typeof onConfirm !== 'function' || typeof onCancel !== 'function') return;

  const confirmAction = () => {
    if (window.confirm(message)) onConfirm();
    else onCancel();
  };

  return confirmAction;
};

// 사용예시
// export default function Custom() {
//   const deleteWorld = () => console.log('Deleting the world');
//   const abort = () => console.log('aborted');
//   const confirmDelete = useConfirm('Are you sure', deleteWorld, abort)
//   return (
//     <>
//       <button onClick={confirmDelete}>Delete the world</button>
//     </>
//   );
// }
