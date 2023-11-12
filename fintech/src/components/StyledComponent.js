import React from 'react';
import styled from 'styled-components';

const BodyBlock = styled.div`
  font-size : 30px;
  color : red;
  text-shadow: 4px 2px 3px #1C6EA4;
  box-shadow: 2px 2px 7px 1px #1C6EA4;
`;

const StyledComponent = () => {

  return (
    <div>
      <BodyBlock>StyledComponent</BodyBlock>
    </div>
  );
};

export default StyledComponent;
