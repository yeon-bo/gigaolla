import React, { useState } from "react";
import styled from "styled-components";
import AttendChart from "./AttendChart";
import CardTemplate from "./CardTemplate";
import ChartTab from "./ChartTab";

const AttendChartWrap = () => {
  const [chartView, setChartView] = useState("bar");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // 응시율 Wrap
  const Cont = styled.div`
    width: 100%;
  `;
  // Element 대신 Chart를 넣어주시면 됩니다. MaxScore 참조
  return (
    <Cont>
      <ChartTab
        onClick={setChartView}
        view={chartView}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      {/* 카드 테두리 Components */}
      <CardTemplate
        Element={AttendChart}
        Name={"응시율"}
        Count={"+ 2.1%"}
        Info={" 전달 대비 응시율"}
        chartView={chartView}
        startDate={startDate}
        endDate={endDate}
      />
    </Cont>
  );
};

export default AttendChartWrap;
