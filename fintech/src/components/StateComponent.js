import React, { useState } from 'react';

const StateComponent = () => {
  let value = '초기값';
  const [username, setUsername] = useState('초기값');

  setInterval(() => {
    value = '변경된 값';
    console.log(value);
    setUsername('변경된 값')
  }, 5000);  // 5초 뒤에 변경
  return (
    <div>
      <b>{value}</b>
      <br></br>
      <b>{username}</b>
    </div>
  );
};

export default StateComponent;
