import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";


const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  //fintechUseNo : 내계좌
  //tofintechno : QR 코드로 읽어온 핀테크 계좌
  const [amount, setamount] = useState("");

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300440";
    let transId = clientNo + "U" + countnum;
    return transId;
  };

  const handlePayButtonClick = () => {
    console.log(amount);
    const accessToken = localStorage.getItem("accessToken");

    // 출금 이체 발생시키기
    // data params json
    // tran_amt, fintech_use_num, req_client_fintech_use_num, bank_tran_id 고정값 사용 금지 나머지는 고정값으로
    const data = {
      bank_tran_id: genTransId(),
      cntr_account_type: "N",
      cntr_account_num: "100000000001",
      dps_print_content: "쇼핑몰환불",
      fintech_use_num: fintechUseNo,
      wd_print_content: "오픈뱅킹출금",
      tran_amt: amount,
      tran_dtime: "20230802130000",
      req_client_name: "홍길동",
      req_client_fintech_use_num: fintechUseNo,
      req_client_num: "HONGGILDONG1234",
      transfer_purpose: "ST",
      recv_client_name: "유관우",
      recv_client_bank_code: "097",
      recv_client_account_num: "100000000001",
    };

    console.log(data);

    // axios option으로 요청을 작성하기 <- api 요청
    const option = {
      url: "/v2.0/transfer/withdraw/fin_num",
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    axios(option).then(({ data }) => {
      console.log(data);
      //A0000 일떄 alert("출금 완료");
      if (data.rsp_code === "A0000") {
        // alert("출금 완료");
        deposit();
      }
    });
  };

  const deposit = () => {
    const twoLeggedToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMzAwNDQwIiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNzAyNDU0NzA2LCJqdGkiOiI2NGIzZDhlZi1kNjE1LTQ1YmEtOWNmNC0wNTNiN2FmOWI4ZDYifQ.UsJS8pJH-xW9OPqlhXZiOzyCul7pcjw6T3KgpWKLvy4";
    const data = {
      cntr_account_type: "N",
      cntr_account_num: "200000000001",
      wd_pass_phrase: "NONE",
      wd_print_content: "환불금액",
      name_check_option: "off",
      tran_dtime: "20220812130000",
      req_cnt: "1",
      req_list: [
        {
          tran_no: "1",
          bank_tran_id: genTransId(),
          fintech_use_num: tofintechno,
          print_content: "오픈서비스캐시백",
          tran_amt: amount,
          req_client_name: "유관우",
          req_client_fintech_use_num: fintechUseNo,
          req_client_num: "1234",
          transfer_purpose: "ST",
        },
      ],
    };
    const option = {
      url: "/v2.0/transfer/deposit/fin_num",
      method: "POST",
      headers: {
        Authorization: `Bearer ${twoLeggedToken}`,
      },
      data: data,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      if (data.rsp_code === "A0000" || data.rsp_code === "A0015") {
        alert("결제 완료 !");
      } else {
        alert("입금실패 !");
      }
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setamount(value);
  };

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}로 돈을 보냅니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
