import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

export default function CustomFetch() {
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
