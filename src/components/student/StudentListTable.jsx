import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import styled from 'styled-components'
import Search from '../../image/Search.svg'
import { TiArrowUnsorted, TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'

const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, rgba(93, 95, 239, 0.2), rgba(93, 95, 239, 0.2)), #ffffff;
  }
`
const SearchBox = styled.div`
  position: relative;
`
const Input = styled.input`
  display: block;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  width: 95%;
  margin: 0 auto;
  height: 48px;
  padding-left: 12px;
  box-sizing: border-box;
  font-size: 16px;
`
const Img = styled.img`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
`
const Arrow = styled.span`
  margin-left: 3px;
`

function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

// Table Title Row
const COLUMNS = [
  {
    Header: '응시여부',
    accessor: '과목',
  },
  {
    Header: '반',
    accessor: '배정반',
  },
  {
    Header: '당월점수',
    accessor: '당월점수',
  },
  {
    Header: '이름',
    accessor: '회원명',
    sortType: 'string',
  },
  {
    Header: '순위',
    accessor: '반별순위',
  },
]

const StudentListTable = ({ getStudentDetailInfo, mockData, setCanBringData }) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => mockData, [mockData])

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } =
    tableInstance

  return (
    <>
      <SearchBox>
        <Input
          placeholder="이름을 입력하세요"
          onChange={(e) => setFilter('회원명', e.target.value)}
        />
        <Img src={Search} alt="Search" />
      </SearchBox>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <Arrow>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <TiArrowSortedDown />
                          ) : (
                            <TiArrowSortedUp />
                          )
                        ) : (
                          <TiArrowUnsorted />
                        )}
                      </Arrow>
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  // console.log(cell.row.original)
                  return (
                    <td
                      onClick={() => {
                        getStudentDetailInfo(cell.row.original)
                        setCanBringData(true)
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </Tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default StudentListTable
