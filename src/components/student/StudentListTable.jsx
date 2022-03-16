import React, { useState } from 'react'
import { mockStudentData } from '../../utils/studentMockData'
import StudentList from './StudentList'

const StudentListTable = () => {
  const [mockData, setMockData] = useState(mockStudentData)

  return (
    <table>
      <thead>
        {/* 1행 */}
        <tr>
          <th>응시여부</th>
          <th>반</th>
          <th>당월점수</th>
          <th>이름</th>
          <th>순위</th>
        </tr>
      </thead>
      <tbody>
        {/* 2행 */}
        {mockData.map((data, idx) => {
          return <StudentList key={idx} data={data} />
        })}

        {/* <tr>
      <td>
        <BlueRedBall></BlueRedBall>
      </td>
      <td>경찰1반</td>
      <td>185</td>
      <td>홍길동</td>
      <td>1</td>
    </tr> */}
      </tbody>
    </table>
  )
}

export default StudentListTable
