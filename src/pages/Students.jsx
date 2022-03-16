import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import StudentListHeader from '../components/student/StudentListHeader'
import StudentListTable from '../components/student/StudentListTable'
import StudentDetail from '../components/student/StudentDetail'
import StudentDetailSkeleton from '../components/student/StudentDetailSkeleton'
import { getLastMonth } from '../utils/getLastMonth'

const Cont = styled.div`
  width: calc(100vw - 315px);
  height: 130em;
  margin-left: 19em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.mainBackground};
`

const UserListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90em;
  margin-top: 5em;
`

const ListArea = styled.div`
  width: 100%;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 30px 0;

  table {
    border-collapse: collapse;
    width: 95%;
    margin: 0 20px 0;

    th,
    td {
      text-align: center;
      padding: 8px;
    }
    th:nth-of-type(1) {
      padding: 30px 0;
    }
  }
`

//컴포.
const Students = () => {
  const { thisYear, lastMonth } = getLastMonth()
  const { subject, number } = useParams()

  const [canBringData, setCanBringData] = useState(false)
  const [mockData, setMockData] = useState([])
  const [studentDetailInfo, setStudentDetailInfo] = useState()

  useEffect(() => {
    ;(async () => {
      if (!number) {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/studentInfoOfClassByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&class=${subject}`
        )
        const { result } = await response.json()
        setMockData(result)
      } else {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/studentInfoOfClassByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&class=${subject}&classn=${number}`
        )
        const { result } = await response.json()
        setMockData(result)
      }
    })()
  }, [thisYear, lastMonth, subject, number])

  const getStudentDetailInfo = (studentData) => {
    setStudentDetailInfo(studentData)
  }

  return (
    <Cont>
      <StudentListHeader number={number} />

      <UserListContainer>
        <ListArea>
          <StudentListTable
            mockData={mockData}
            getStudentDetailInfo={getStudentDetailInfo}
            setCanBringData={setCanBringData}
          />
        </ListArea>
        {canBringData ? (
          <StudentDetail studentDetailInfo={studentDetailInfo} />
        ) : (
          <StudentDetailSkeleton />
        )}
        {/* <Outlet /> */}
      </UserListContainer>
    </Cont>
  )
}

export default Students
