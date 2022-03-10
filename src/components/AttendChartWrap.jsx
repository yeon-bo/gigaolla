import React, { useState } from "react";
import styled from "styled-components";
import AttendChart from "./AttendChart";
import CardTemplate from "./CardTemplate";
import ChartTab from "./ChartTab";

const AttendChartWrap = () => {
  const [chartView, setChartView] = useState("bar");
  const [todayDate, setTodayDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [compareAttendPercent, setCompareAttendPercent] = useState(0);
  const [info, setInfo] = useState(" 전달 대비 응시율");
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
        todayDate={todayDate}
        setTodayDate={setTodayDate}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      {/* 카드 테두리 Components */}
      <CardTemplate
        Element={AttendChart}
        Name={"응시율"}
        Count={compareAttendPercent + "%"}
        Info={info}
        chartView={chartView}
        startDate={startDate}
        endDate={endDate}
        setCompareAttendPercent={setCompareAttendPercent}
      />
    </Cont>
  );
};

export default AttendChartWrap;
