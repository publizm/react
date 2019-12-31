import React, { useState } from 'react';
import { useInput } from './CustomInput';
import { useFetch } from './CustomFetch';

export default function Custom() {
  const { payload, loading, error } = useFetch('http://aws.random.cat/meow');
  return (
    <div>
      <h1>UseFetch</h1>
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} alt="ㅎㅎㅎ" />}
    </div>
  );
}
