import React, { useState } from 'react'
import styled from 'styled-components'

const BlueRedBall = styled.div`
  width: 1em;
  height: 1em;
  background-color: ${(props) => (props.takeTest === true ? 'blue' : 'red')};
  border-radius: 50%;
  display: inline-block;
`

const StudentListRow = styled.tr`
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background: linear-gradient(0deg, rgba(93, 95, 239, 0.2), rgba(93, 95, 239, 0.2)), #ffffff;
  }
`

const StudentList = ({ data }) => {
  // 응시여부 파란색 빨간색 예시
  const [takeTest, setTakeTest] = useState(true)

  return (
    <StudentListRow>
      <td>
        <BlueRedBall takeTest={takeTest}></BlueRedBall>
      </td>
      <td>{data.배정반}</td>
      <td>{data.당월점수}</td>
      <td>{data.회원명}</td>
      <td>{data.순위}</td>
    </StudentListRow>
  )
}

export default StudentList
