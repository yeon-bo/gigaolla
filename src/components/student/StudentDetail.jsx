import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mockStudentData } from '../../utils/studentMockData'
import StudentDetailContent from './StudentDetailContent'

const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40em;
  height: 25em;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  /* height: 90%; */
  margin-top: 30px;
  margin-left: 5em;
  padding: 30px 0;
`

const Header = styled.header`
  /* border: 1px solid black; */
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 25px;
    font-weight: bold;
  }
  .id {
    margin-top: 6px;
  }
  .title {
    margin-top: 23px;
    font-size: 13px;
  }
  .rate {
    margin-top: 20px;
    font-size: 25px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const InfoContainer = styled.div`
  /* border: 1px solid blue; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span:nth-of-type(1) {
    color: grey;
  }
  span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 900;
  }

  span {
    margin-bottom: 9px;
  }
  span:last-child {
    margin-bottom: 0;
  }

  &:nth-of-type(3) {
    span:nth-of-type(2) {
      color: red;
    }
  }
`

const StudentDetail = () => {
  return (
    <ListArea>
      <Header>
        <div className="name">홍길동</div>
        <div className="id">kingwangzzang123</div>
        <div className="title">증감</div>
        <div className="rate">12%</div>
      </Header>

      <Content>
        <InfoContainer>
          <span>반</span>
          <span>소방1반</span>
        </InfoContainer>
        <InfoContainer>
          <span>순위</span>
          <span>1</span>
        </InfoContainer>
        <InfoContainer>
          <span>점수</span>
          <span>185</span>
        </InfoContainer>
        <InfoContainer>
          <span>당월 목표</span>
          <span>175</span>
        </InfoContainer>
        <InfoContainer>
          <span>달성도</span>
          <span>100%</span>
        </InfoContainer>
        <InfoContainer>
          <span>익월목표</span>
          <span>187.5</span>
        </InfoContainer>
      </Content>
    </ListArea>
  )
}

export default StudentDetail
