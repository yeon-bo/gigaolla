import React from "react";
import styled from "styled-components";

import Navigation from "../components/Navigation";
import OverviewCard from "../components/OverviewCard";

const Home = () => {
  // 전체 페이지 Wrap
  const Background = styled.div`
    width: 100%;
  `;
  // 네비게이션 제외 내용 Wrap
  const Cont = styled.div`
    margin-top: 7.5em;
    margin-left: 19.69em;
    padding: 0 2.5em;
  `;
  // OVERVIEW
  const Title = styled.span`
    display: flex;
    justify-content: flex-start;
    margin: 0 auto 2.5rem;
    width: 82.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.38em;
    line-height: 1.61rem;
    color: #5d5fef;
  `;
  // OverviewCard Wrap
  const CardCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 9.63em;
  `;
  // Chart Wrap
  const ChartCont = styled.div`
    max-width: 82.5em;
    height: 37.25em;
    margin: 0 auto;
    margin-bottom: 14em;
  `;
  const Chart = styled.div`
    width: 100%;
    height: 100%;
    background: #ddd;
  `;
  return (
    <Background>
      <Navigation />
      <Cont>
        <Title>OVERVIEW</Title>
        <CardCont>
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
        </CardCont>
        <ChartCont>
          <Chart />
        </ChartCont>
      </Cont>
    </Background>
  );
};

export default Home;
