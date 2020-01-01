import React, { useRef, useEffect } from 'react';
import uuid from 'uuid';
import { useInput } from './CustomInput';
import { useFetch } from './CustomFetch';
import { useTabs } from './CustomTabs';
import { useTitle } from './CustomTitle';
import { useClick } from './CustomClick';
import { useConfirm } from './CustomConfirm';
import { usePreventLeave } from './CustomPreventLeave';
import { useBeforeLeave } from './CustomBeforeLeave';

export default function Custom() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
