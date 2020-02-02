import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'query-string';

function Test() {
  const [items, setItems] = useState();
  const config = {
    headers: {
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b20a7db9a8mshb4bf43e083c436fp191230jsn6725c3b09598',
    },
    params: {
      'sortType': 'price',
      'pageIndex': '0',
      'pageSize': '500',
    },
  };

  const getConfig = {
    data: {
      inboundDate: '2020-02-15',
      cabinClass: 'economy',
      children: '0',
      infants: '0',
      country: 'KR',
      currency: 'KRW',
      locale: 'KR',
      originPlace: 'ICN-sky',
      destinationPlace: 'NRT-sky',
      outboundDate: '2020-02-10',
      adults: '1',
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b20a7db9a8mshb4bf43e083c436fp191230jsn6725c3b09598',
    },
  };

  const requestBody = {
    inboundDate: '2020-02-15',
    cabinClass: 'economy',
    children: 0,
    infants: 0,
    country: 'KR',
    currency: 'KRW',
    locale: 'KR',
    originPlace: 'ICN-sky',
    destinationPlace: 'NRT-sky',
    outboundDate: '2020-02-10',
    adults: 1,
  };

  const header = {
    headers: {
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b20a7db9a8mshb4bf43e083c436fp191230jsn6725c3b09598',
    },
  };

  const getData = async () => {
    // const response = await axios.post(
    //   'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
    //   qs.stringify(requestBody),
    //   header,
    // );

    const settionKey = 'c4f5b01d-57bc-4536-ae2f-fafe11cbd9f5';
    const response = await axios.get(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${settionKey}`,
      config,
    );

    console.log(response);
    // console.log(response.headers.location);
    // setItems(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return <div></div>;
}

export default Test;
