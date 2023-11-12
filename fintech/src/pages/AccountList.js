import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainAccountCard from '../components/list/MainAccountCard';
import HeaderComponent from "../components/HeaderComponent";


const AccountList = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log('data');
    getAccountList();
  }, []);

   const getAccountList = () => {
     const accessToken = localStorage.getItem("accessToken");
     const userSeqNo = localStorage.getItem("userSeqNo");
     // const ourtoken = localStorage.getItem("ourtoken");
     let requestOption = {
       url: "/v2.0/user/me",
       // url: "/account",
       method : 'GET',
       headers : {
         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
         Authorization : `Bearer ${accessToken}`
       },
       params : {
         user_seq_no : userSeqNo,
            // ourtoken: ourtoken,
       }
     };
     axios(requestOption).then((response) => {
       console.log(response);
       setAccountList(response.data.res_list);
     });
   };


  return (
    <div>
      <HeaderComponent title={"계좌조회"}></HeaderComponent>
      {accountList.map((account) => {
        return (
          <MainAccountCard
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          ></MainAccountCard>
        );
      })}
    </div>
  );
};

export default AccountList;
