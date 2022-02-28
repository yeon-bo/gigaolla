import React from "react";
import styled from "styled-components";

import Navigation from "../components/Navigation";
import SummaryCard from "../components/SummaryCard";
import AttendChart from "../components/AttendChart";
import MaxScoreChart from "../components/MaxScoreChart";
import AverageChart from "../components/AverageChart";
import DistributionChart from "../components/DistributionChart";

const Class = () => {
  const Background = styled.div`
    width: 100%;
  `;
  const Cont = styled.div`
    margin-left: 19.69em;
    margin-bottom: 7.63em;
  `;
  const MessageCont = styled.div`
    width: 82.81em;
    height: 5em;
    margin: 7.5em auto 0;
    background: #214680;
    border-radius: 16px;
  `;
  const Message = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const MessageText = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-size: 2em;
    color: #fff;
    line-height: 2.75rem;
  `;
  const SummaryCardCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.75em;
  `;
  const ChartCont = styled.div`
    max-width: 82.5em;
    margin: 0 auto;
    padding-top: 5em;
  `;
  const ChartName = styled.div`
    font-weight: bold;
    font-size: 1.63em;
    line-height: 2.19rem;
    margin-bottom: 3.13rem;
  `;
  const Chart2Cont = styled.div`
    max-width: 82.5em;
    height: 37.25em;
    margin: 0 auto;
    padding-top: 5em;
  `;
  const Chart2 = styled.div`
    display: flex;
  `;
  return (
    <Background>
      <Navigation />
      <Cont>
        <MessageCont>
          <Message>
            <MessageText>
              경찰직, 목표 점수 달성도가 90%가 넘은 학생은 N명이며 저번 시험
              대비 N% 올랐습니다.
            </MessageText>
          </Message>
        </MessageCont>
        <SummaryCardCont>
          <SummaryCard Title={"재학생"} />
          <SummaryCard Title={"응시생"} />
          <SummaryCard Title={"응시율"} />
          <SummaryCard Title={"10%"} />
        </SummaryCardCont>
        <ChartCont>
          <ChartName>응시지표</ChartName>
          <AttendChart />
        </ChartCont>
        <Chart2Cont>
          <ChartName>점수지표</ChartName>
          <Chart2>
            <MaxScoreChart />
            <AverageChart />
          </Chart2>
        </Chart2Cont>
        <ChartCont>
          <ChartName>점수대별 인원수</ChartName>
          <DistributionChart />
        </ChartCont>
      </Cont>
    </Background>
  );
};

export default Class;
