import React from "react";
import styled from "styled-components";

import PoliceIcon from "../image/PoliceIcon.svg";

const OverviewCard = () => {
  const Cont = styled.div`
    position: relative;
    padding: 1.56em;
    box-sizing: border-box;
    width: 26.25em;
    height: 26.25em;
    font-family: "Noto Sans KR", sans-serif;
    background: #fff;
    border-radius: 25px;
    + div {
      margin-left: 1.88em;
    }
    box-shadow: 0px 17px 26px rgba(0, 0, 0, 0.06),
      0px 2px 6.5px rgba(0, 0, 0, 0.04), 0px 0px 1.09208px rgba(0, 0, 0, 0.04);
  `;
  const ClassName = styled.span`
    font-size: 2.13em;
    font-weight: bold;
    color: #21468d;
  `;
  const IconCont = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1.63em;
    right: 1.69em;
    width: 3em;
    height: 3em;
    background-color: #21468d;
    border-radius: 2em;
  `;
  const Icon = styled.img`
    width: 2em;
  `;
  const StudentCounterCont = styled.div`
    position: absolute;
    display: flex;
    margin-top: 7.56em;
    top: 0;
    width: 22.69em;
    height: 7.94em;
    ::after {
      content: "";
      position: absolute;
      bottom: 1.38em;
      left: 6.8em;
      width: 1px;
      height: 4.38em;
      background-color: #c4c4c4;
    }
  `;
  const StudentCounter = styled.div`
    position: relative;
    display: block;
    width: 5.56rem;
    margin-right: 1.44em;
    + div {
      padding-left: 1.4em;
    }
  `;
  const Student = styled.span`
    display: block;
    color: #696969;
    font-size: 0.88em;
    line-height: 1.19rem;
  `;
  const Counter = styled.span`
    font-size: 1.25em;
    position: absolute;
    right: 0;
  `;
  const Number = styled.span`
    display: inline-block;
    margin-top: 1.88rem;
    margin-right: 0.2rem;
    font-size: 2.38rem;
    font-weight: bold;
    line-height: 1.88rem;
  `;
  const Increase = styled.span`
    position: absolute;
    display: block;
    right: 0;
    font-size: 0.75em;
    line-height: 1rem;
    margin-top: 4.38rem;
    color: #2dce89;
  `;
  const ChartCont = styled.div`
    left: 0;
  `;
  const Chart = styled.div`
    position: absolute;
    top: 2em;
    right: 0;
    width: 5.94em;
    height: 5.94em;
    transform: rotate(90deg);
    background: conic-gradient(#21468d 0% 90%, #c4c4c4 0% 100%);
    border-radius: 3em;
    display: flex;
    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      content: "";
      width: 4em;
      height: 4em;
      background: #fff;
      border-radius: 3em;
    }
  `;
  const ChartScoreCont = styled.div`
    position: absolute;
    top: 3.4em;
    right: 1.6em;
  `;
  const ScoreAllCont = styled.div`
    position: absolute;
    width: 22.69em;
    bottom: 3.25em;
    display: flex;
    justify-content: space-between;
  `;
  const ScoreCont = styled.div`
    position: relative;
  `;
  const ScoreName = styled.span`
    display: block;
    text-align: center;
    width: 100%;
    color: #696969;
    font-size: 0.88em;
    line-height: 1.88rem;
    margin-bottom: 0.31rem;
  `;
  const Score = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 0.88em;
    line-height: 1.88rem;
  `;
  const ScoreNumber = styled.span`
    font-size: 1.38rem;
    font-weight: bold;
    line-height: 1rem;
    margin-right: 0.2rem;
  `;
  const ScoreIncrease = styled.span`
    display: block;
    position: absolute;
    text-align: center;
    width: 100%;
    font-size: 0.75em;
    line-height: 1rem;
    margin-top: 0.1rem;
    color: #2dce89;
  `;
  return (
    <Cont>
      <ClassName>경찰직</ClassName>
      <IconCont>
        <Icon src={PoliceIcon} alt="policeIcon" />
      </IconCont>
      <StudentCounterCont>
        <StudentCounter>
          <Student>재학생</Student>
          <Counter>
            <Number>292</Number>명
          </Counter>
          <Increase>+123명</Increase>
        </StudentCounter>
        <StudentCounter>
          <Student>응시생</Student>
          <Counter>
            <Number>29</Number>명
          </Counter>
          <Increase>+3명</Increase>
        </StudentCounter>
        <ChartCont>
          <Student>응시율</Student>
          <Chart />
          <ChartScoreCont>
            <ScoreCont>
              <Score>
                <ScoreNumber>90</ScoreNumber>%
              </Score>
              <ScoreIncrease>+2.5%</ScoreIncrease>
            </ScoreCont>
          </ChartScoreCont>
        </ChartCont>
      </StudentCounterCont>
      <ScoreAllCont>
        <ScoreCont>
          <ScoreName>평균점수</ScoreName>
          <Score>
            <ScoreNumber>89</ScoreNumber>점
          </Score>
          <ScoreIncrease>+2.5점</ScoreIncrease>
        </ScoreCont>
        <ScoreCont>
          <ScoreName>점수향상</ScoreName>
          <Score>
            <ScoreNumber>24.5</ScoreNumber>%
          </Score>
          <ScoreIncrease>-0.15%</ScoreIncrease>
        </ScoreCont>
        <ScoreCont>
          <ScoreName>상위10%</ScoreName>
          <Score>
            <ScoreNumber>2.2</ScoreNumber>%
          </Score>
          <ScoreIncrease>-1%</ScoreIncrease>
        </ScoreCont>
        <ScoreCont>
          <ScoreName>하위10%</ScoreName>
          <Score>
            <ScoreNumber>2</ScoreNumber>%
          </Score>
          <ScoreIncrease>-0.1%</ScoreIncrease>
        </ScoreCont>
      </ScoreAllCont>
    </Cont>
  );
};

export default OverviewCard;
