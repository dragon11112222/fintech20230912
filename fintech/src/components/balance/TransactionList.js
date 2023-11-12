import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  margin: 10px;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.td`
  font-weight: bold;
  padding: 8px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;

const TransactionList = ({ transactionList }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>날짜</TableHeaderCell>
            <TableHeaderCell>내용</TableHeaderCell>
            <TableHeaderCell>금액</TableHeaderCell>
            <TableHeaderCell>잔액</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionList.length > 0 &&
            transactionList.map((transaction, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{transaction.tran_date}</TableCell>
                  <TableCell>{transaction.print_content}</TableCell>
                  <TableCell>{transaction.tran_amt}</TableCell>
                  <TableCell>{transaction.after_balance_amt}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionList;
