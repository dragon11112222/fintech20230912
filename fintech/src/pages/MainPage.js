import React from 'react';
import HeaderComponent from '../components/HeaderComponent';


const MainPage = () => {
  const handleClick = () => {
    const newWindow = window.open('', '_blank');
    const clientId = '20af464b-772b-4669-b1cb-6dcb229fe113';
    const authorizeUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;

    newWindow.location.href = authorizeUrl;
  };

  return (
    <div>
      <HeaderComponent title = {'사용자 인증 센터 이동'}></HeaderComponent>
      <button onClick = {handleClick}>사용자 인증</button>
    </div>
  );
};

export default MainPage;
