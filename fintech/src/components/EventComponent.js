import React from 'react';

const EventComponent = () => {

  const handleClick = () => {
    alert('클릭');
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <input onChange = {handleChange}></input>
      <button onClick = {handleClick}>전송</button>
    </div>
  );
};

export default EventComponent;
