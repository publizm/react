import React from 'react';
import { useTitle } from './CustomTitle';

export default function Page() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("page"), 1000);

  return (
    <>
      <div>페이지입니다.</div>
    </>
  );
}
