import React from "react";
import styled from "styled-components";

import MessageText from "../components/MessageText";
import Navigation from "../components/Navigation";
import SummaryCard from "../components/SummaryCard";
import AttendChartWrap from "../components/AttendChartWrap";
import MaxScoreWrap from "../components/MaxScoreWrap";
import AverageChartWrap from "../components/AverageChartWrap";
import DistributionChartWarp from "../components/DistributionChartWarp";

// switch (SUBJECT) {
//   case "경찰":
//     color = "경찰";
//     break;
//   case "소방":
//     color = "소방";
//     break;
//   default:
//     color = "행정";
// }

const Class = () => {
  // 전체 페이지 Wrap
  const Background = styled.div`
    width: 100%;
  `;
  // 네비게이션 제외 내용 Wrap
  const Cont = styled.div`
    margin-bottom: 7.63em;
    margin-left: 19.69em;
    padding: 0 2.5em;
  `;
  const PageRound = styled.div`
    position: fixed;
    background: #5d5fef;
    width: 1.88em;
    height: 100%;
    top: 0;
    left: 19.69em;
    ::after {
      position: fixed;
      content: "";
      width: 1.88em;
      height: 100%;
      background: #fff;
      border-radius: 20px 0 0 20px;
    }
  `;
  // 상단 '00직, 목표 점수 달성도가~' 전체 wrap
  const MessageCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  // 재학생, 응시생, 응시율, 상위 카드 wrap
  const SummaryCardCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.75em;
  `;
  // 차트 wrap
  const ChartCont = styled.div`
    position: relative;
    max-width: 82.5em;
    margin: 0 auto;
    padding-top: 5em;
  `;
  // 차트 Title
  const ChartName = styled.div`
    font-weight: bold;
    font-size: 1.63em;
    line-height: 2.19rem;
    margin-bottom: 3.13rem;
  `;
  // 점수지표 차트 wrap
  const Chart2 = styled.div`
    display: flex;
  `;
  return (
    <Background>
      <Navigation />
      <Cont>
        <PageRound />
        <MessageCont>
          <MessageText />
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

export default Class;
