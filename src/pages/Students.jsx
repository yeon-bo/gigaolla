import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Outlet, useParams } from 'react-router-dom'
import StudentListHeader from '../components/student/StudentListHeader'
import StudentListTable from '../components/student/StudentListTable'
import StudentDetail from '../components/student/StudentDetail'
import { mockStudentData } from '../utils/studentMockData'

const Cont = styled.div`
  width: calc(100vw - 315px);
  height: 130em;
  margin-left: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: absolute; */
  /* top: 0; */
  /* right: 0; */
`

const UserListContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* height: 106.5em; */
  width: 90em;
  margin-top: 5em;
  /* margin-left: 24em; */

  /* input {
    border: none;
    border-radius: 12px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-size: 21px;
    color: #999;
    outline: none;
    width: 33.4em;
  } */
`

const ListArea = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  /* height: 90%; */
  margin-top: 30px;
  padding: 30px 0;

  table {
    border-collapse: collapse;
    width: 95%;
    margin: 0 20px 0;

    th,
    td {
      text-align: center;
      padding: 8px;
      /* background-color: yellow; */
    }
    th:nth-of-type(1) {
      padding: 30px 0;
    }
  }
`

//컴포.
const Students = () => {
  const { subject, number } = useParams()
  console.log(subject, number)

  return (
    <Cont>
      <StudentListHeader number={number} />

      <UserListContainer>
        <ListArea>
          <StudentListTable />
        </ListArea>
        <StudentDetail />
        <Outlet />
      </UserListContainer>
    </Cont>
  )
}

export default Students
