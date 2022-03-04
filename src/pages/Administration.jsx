import React from "react";
import styled from "styled-components";

import Navigation from "../components/Navigation";
import SummaryCard from "../components/SummaryCard";
import AttendChartWrap from "../components/AttendChartWrap";
import MaxScoreWrap from "../components/MaxScoreWrap";
import AverageChartWrap from "../components/AverageChartWrap";
import DistributionChartWarp from "../components/DistributionChartWarp";

const Administration = () => {
  const Background = styled.div`
    width: 100%;
  `;
  const Cont = styled.div`
    margin-bottom: 7.63em;
    margin-left: 19.69em;
    padding: 0 2.5em;
  `;
  const MessageCont = styled.div`
    width: 82.81em;
    height: 5em;
    margin: 7.5em auto 0;
    background: #257e0e;
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
    position: relative;
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
              행정직, 목표 점수 달성도가 90%가 넘은 학생은 N명이며 저번 시험
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
          <AttendChartWrap />
        </ChartCont>
        <ChartCont>
          <ChartName>점수지표</ChartName>
          <Chart2>
            <MaxScoreWrap />
            <AverageChartWrap />
          </Chart2>
        </ChartCont>
        <ChartCont>
          <ChartName>점수대별 인원수</ChartName>
          <DistributionChartWarp />
        </ChartCont>
      </Cont>
    </Background>
  );
};

export default Administration;
