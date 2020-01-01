import React, { useRef, useEffect } from 'react';
import uuid from 'uuid';
import { useInput } from './CustomInput';
import { useFetch } from './CustomFetch';
import { useTabs } from './CustomTabs';
import { useTitle } from './CustomTitle';
import { useClick } from './CustomClick';
import { useConfirm } from './CustomConfirm';
import { usePreventLeave } from './CustomPreventLeave';

export default function Custom() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </>
  );
}
