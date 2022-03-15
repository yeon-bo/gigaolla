import React from 'react'
import styled from 'styled-components'

const CalendarItem = styled.div`
  background-color: #fff;
  width: 11em;
  height: 11em;
  border: 1px solid grey;
`

const Day = ({ day }) => {
  return <CalendarItem>{day.format()}</CalendarItem>
}

export default Day
