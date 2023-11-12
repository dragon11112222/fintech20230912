import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";


const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCode = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechNo = parsed.fintechUseNo;

  return (
    <div>
      <HeaderComponent title = {'QR Code'}></HeaderComponent>
      <QRBlock>
        <QRCodeSVG size={256} value={fintechNo} />
        <p>{fintechNo}</p>
      </QRBlock>
    </div>
  );
};

export default QrCode;
