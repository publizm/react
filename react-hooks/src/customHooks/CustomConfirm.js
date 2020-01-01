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
