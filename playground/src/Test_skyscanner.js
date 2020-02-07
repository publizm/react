import React, { useState } from 'react';
import axios from 'axios';
import qs from 'query-string';

function Test() {
  const [session, setSession] = useState(null);

  const header = {
    headers: {
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b20a7db9a8mshb4bf43e083c436fp191230jsn6725c3b09598',
    },
  };

  const getData = async () => {
    const sessionKey = await createSession();
    let prevAgentsLength = null;

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
          'pageSize': '100',
        },
      };

      const {
        data,
      } = await axios.get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionKey}`,
        { headers: config.headers },
      );

      // priceOptions > agent 값 가져오기
      const agents = [
        ...new Set(
          [
            ...data.Itineraries.map(item =>
              item.PricingOptions.map(agent => agent.Agents[0]),
            ),
          ].reduce((pre, cur) => {
            pre.push(...cur);
            return pre;
          }, []),
        ),
      ];
      console.log(data);
      const agentIds = data.Agents.map(agent => agent.Id);

      // 이전의 agents length 체크
      if (prevAgentsLength !== agents.length) {
        prevAgentsLength = agents.length;
      }
      // console.log(agents.length);
      // console.log(prevAgentsLength, agents.length);

      console.log('Agent의 Id 값', agentIds);
      console.log('Itineraries의 PriceOptions의 agent 모음', agents);

      let count = 0;
      let completed = 0;

      let per = 100 / agents.length;

      agents.forEach(agent => {
        if (agentIds.includes(agent) && completed !== 100) {
          count += 1;
          completed += per;
        }
      });
      console.log('count', count);
      console.log(completed + '%');
      // console.log('PENDING', [...agents].length / 100);

      // let per = 100 / [...agents].length;
      // [...agent]
      // num += num;

      // console.log('PENDING_agentIds', agentIds);

      if (data.Status === 'UpdatesComplete') {
        console.log('COMPLETED');
        console.log('COMPLETED', data);
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

  return (
    <div>
      <button onClick={getData}>검색</button>
    </div>
  );
}

export default Test;
