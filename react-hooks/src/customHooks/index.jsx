import React, { useRef, useEffect } from 'react';
import uuid from 'uuid';
import { useInput } from './CustomInput';
import { useFetch } from './CustomFetch';
import { useTabs } from './CustomTabs';
import { useTitle } from './CustomTitle';
import { useClick } from './CustomClick';

export default function Custom() {
  const sayHello = () => {
    console.log('say HEllo')
  }
  const title = useClick(sayHello);
  return (
    <>
      <h1 ref={title}>Hi!</h1>
    </>
  );
}
