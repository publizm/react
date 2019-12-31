import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    const { value } = e.target;
    setValue(value);
  }

  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const callUrl = async () => {
    try {
      const { data } = await axios.get(url);
      setPayload(data);
    } catch (err) {
      setError('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}

export default function CustomInput() {
  const name = useInput('');
  const { payload, loading, error } = useFetch('http://aws.random.cat/meow');
  console.log(name);
  return (
    <div>
      <h1>UseInputs</h1>
      {/* 동일 */}
      {/* <input value={name.value} onChange={name.onChange} type="text" /> */}
      <input {...name} type="text" />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} alt="ㅎㅎㅎ" />}
    </div>
  );
}
