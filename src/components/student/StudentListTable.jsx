import React from 'react'
import StudentListItem from './StudentListItem'

const StudentListTable = ({ getStudentDetailInfo, mockData, setCanBringData }) => {
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
          return (
            <StudentListItem
              key={idx}
              data={data}
              getStudentDetailInfo={getStudentDetailInfo}
              setCanBringData={setCanBringData}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default StudentListTable
