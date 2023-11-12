import React from "react";
import styled from "styled-components";

// styled-components로 헤더 스타일링
const StyledHeader = styled.header`
  background-color: #282c34;
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;


// 무엇을 입력으로 받아서 어떻게 출력하는지
const HeaderComponent = ({ title }) => {
  return (
    <StyledHeader>
      <Logo>{title}</Logo>
    </StyledHeader>
  );
};

export default HeaderComponent;
