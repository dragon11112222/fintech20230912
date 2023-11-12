import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import axios from "axios";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import BalanceCard from "../components/balance/BalanceCard";
import TransactionList from "../components/balance/TransactionList";


const Balance = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechNo = parsed.fintechUseNo;

  const [balance, setBalance] = useState('0');
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    getBalance();
    getTransactionList();
  }, []);

  const getBalance = () => {
    const accessToken = localStorage.getItem('accessToken');
    let requestOption = {
      url : '/v2.0/account/balance/fin_num',
      method : 'GET',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization : `Bearer ${accessToken}`
      },
      params : {
        bank_tran_id : genTransId(),
        fintech_use_num : fintechNo,
        tran_dtime : '20230914103600'
      }
    };
    axios(requestOption).then((response) => {
      console.log(response);
      setBalance(response.data);
    });
  };

  const getTransactionList = () => {
    const accessToken = localStorage.getItem("accessToken");
    let requestOption = {
      url: "/v2.0/account/transaction_list/fin_num",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20230912",
        to_date: "20230914",
        sort_order: "A",
        tran_dtime: "20230914103600",
      },
    };
    axios(requestOption).then(({ data }) => {
      setTransactionList(data.res_list);
    });
  };

  function generateRandom9DigitNumber() {
    const min = 100000000; // Minimum value (smallest 9-digit number)
    const max = 999999999; // Maximum value (largest 9-digit number)

    const random9DigitNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return random9DigitNumber.toString();
  }

  const genTransId = () => {
    return "M202300440U" + generateRandom9DigitNumber();
  };

  return (
    <div>
      <HeaderComponent title = {'잔액조회 / 거래내역'}></HeaderComponent>
      <BalanceCard
        bankName = {balance.bank_name}
        fintechNo = {fintechNo}
        balance = {balance.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={transactionList}></TransactionList>
    </div>
  );
};

export default Balance;
