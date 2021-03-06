import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'query-string';
import LinearProgress from '@material-ui/core/LinearProgress';

function Test() {
  const [completed, setCompleted] = useState(0);

  const header = {
    headers: {
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b20a7db9a8mshb4bf43e083c436fp191230jsn6725c3b09598',
    },
  };

  const getData = async () => {
    const sessionKey = await createSession();

    while (true) {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-rapidapi-key':
            'b20a7db9a8mshb4bf43e083c436fp191230jsn6725c3b09598',
        },
        params: {
          'sortType': 'price',
          'pageIndex': '0',
          'pageSize': '20',
        },
      };

      const {
        data,
      } = await axios.get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionKey}`,
        { headers: config.headers },
      );

      const agentLength = data.Agents.length;
      const compoleteLength = data.Agents.filter(
        agent => agent.Status === 'UpdatesComplete',
      ).length;

      setCompleted(Math.floor((compoleteLength / agentLength) * 100));

      console.log('PENDING', data);

      if (data.Status === 'UpdatesComplete') {
        console.log('COMPLETED');
        console.log('COMPLETED', data);
        console.log(agentLength, compoleteLength);
        setCompleted(100);
        return;
      }
    }
  };

  const createSession = async () => {
    const requestBody = {
      inboundDate: '2020-02-19',
      cabinClass: 'economy',
      children: 0,
      infants: 0,
      country: 'KR',
      currency: 'KRW',
      locale: 'ko-KR',
      originPlace: 'ICN-sky',
      destinationPlace: 'CJU-sky',
      outboundDate: '2020-02-10',
      adults: 1,
    };

    const headers = {
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b20a7db9a8mshb4bf43e083c436fp191230jsn6725c3b09598',
    };
    const {
      headers: { location },
    } = await axios.post(
      'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
      qs.stringify(requestBody),
      { headers },
    );

    const sessionKey = location.split('/');

    return sessionKey[sessionKey.length - 1];
  };

  useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 100;
        }
        return Math.min(oldCompleted, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <LinearProgress variant="determinate" value={completed} />
      <LinearProgress
        variant="determinate"
        value={completed}
        color="secondary"
      />
      <button onClick={getData}>검색</button>
    </div>
  );
}

export default Test;
