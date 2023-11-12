import React from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const handleClick = () => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-08-18&sortBy=publishedAt&language=zh&apiKey=67c7ed154a9f4390993d62aa7c8d74c1').then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      <button onClick = {handleClick}>요청 생성</button>
    </div>
  );
};

export default AxiosComponent;
