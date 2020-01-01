import React from 'react';
import uuid from 'uuid';
import { useInput } from './CustomInput';
import { useFetch } from './CustomFetch';
import { useTabs } from './CustomTabs';
import { useTitle } from './CustomTitle';

export default function Custom() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 1000);

  return (
    <>
      <div>
      </div>
    </>
  );
}
