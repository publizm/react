import React, { useRef, useEffect } from 'react';
import uuid from 'uuid';
import { useInput } from './CustomInput';
import { useFetch } from './CustomFetch';
import { useTabs } from './CustomTabs';
import { useTitle } from './CustomTitle';
import { useClick } from './CustomClick';
import { useConfirm } from './CustomConfirm';

export default function Custom() {
  const deleteWorld = () => console.log('Deleting the world');
  const abort = () => console.log('aborted');
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort)
  return (
    <>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
}
