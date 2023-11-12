import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';


const AuthResult = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const code = parsed.code;

  const [accessToken, setAccessToken] = useState('');
  const [userSeqNo, setUserSeqNo] = useState('');

  const handleClick = () => {
    let requestOption = {
      url : '/oauth/2.0/token',
      method : 'POST',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      data : {
        code : code,
        client_id : '20af464b-772b-4669-b1cb-6dcb229fe113',
        client_secret : '61e55bb3-625d-49f6-89a3-ca6b166eda3f',
        redirect_uri : 'http://localhost:3000/authResult',
        grant_type : 'authorization_code'
      }
    };
    axios(requestOption).then(({ data }) => {
      setAccessToken(data.access_token);
      setUserSeqNo(data.user_seq_no);
      if (data.rsp_code !== 'O0001') {
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('userSeqNo', data.user_seq_no);
        alert('저장 완료');
      } else {
        alert('인증에 실패하였으니 다시 시도해주세요');
      }
    });
  };

  return (
    <div>
      <HeaderComponent title = {'토큰 발급 / 인증'}></HeaderComponent>
      <p>사용자 인증 코드 : {code}</p>
      <button onClick = {handleClick}>토큰 발급하기</button>
      <p>accessToken : {accessToken}</p>
      <p>userSeqNo : {userSeqNo}</p>
    </div>
  );
};

export default AuthResult;
