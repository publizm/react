import React from 'react';
import { useTitle } from './CustomTitle';

export default function Home() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 1000);

  return (
    <>
      <div>홈입니다.</div>
    </>
  );
}
