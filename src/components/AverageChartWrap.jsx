import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardTemplate from "./CardTemplate";
import AverageChart from "./AverageChart";
import AverageChart2 from "./AverageChart2";
import ChartTab from "./ChartTab";
import Button2 from "./Button";

// 평균점수 Wrap
const Cont = styled.div`
  width: 100%;
  position: relative;
`;

const AverageChartWrap = () => {
  let date = new Date();
  date.setMonth(date.getMonth() - 5);
  const [filterSubject, setFilterSubject] = useState("총점");
  const [chartView, setChartView] = useState("bar");
  const [startDate, setStartDate] = useState(date); // 10월
  const [endDate, setEndDate] = useState(new Date()); // 3월
  const [maxDate, setMaxDate] = useState(new Date()); // 최대로 필터 가능한 날짜
  const [compareStartDate, setCompareStartDate] = useState(new Date()); // 일단 현재 날짜
  const [compareEndDate, setCompareEndDate] = useState(new Date()); // 일단 현재 날짜
  const [info, setInfo] = useState(" 전달 대비 응시율");

  useEffect(() => {
    if (!compareStartDate || !compareEndDate) return;
    let startYear = compareStartDate.getFullYear().toString().substr(2); // 달력 선택 년도 2자리(처음)
    let startMonth = compareStartDate.getMonth() + 1; // 달력 선택 월 2자리(처음)
    startMonth = startMonth < 10 ? `0${startMonth}` : startMonth;
    let endYear = compareEndDate.getFullYear().toString().substr(2); // 달력 선택 년도 2자리(끝)
    let endMonth = compareEndDate.getMonth() + 1; // 달력 선택 월 2자리(끝)
    endMonth = endMonth < 10 ? `0${endMonth}` : endMonth;

    setInfo(
      chartView === "compareBar"
        ? ` ${startYear}.${startMonth} 대비 ${endYear}.${endMonth} 응시율`
        : " 전달 대비 평균 총점"
    );
  }, [chartView, compareStartDate, compareEndDate]);

  return (
    <Cont>
      <ChartTab
        setChartView={setChartView}
        view={chartView}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        maxDate={maxDate}
        setMaxDate={setMaxDate}
        compareStartDate={compareStartDate}
        setCompareStartDate={setCompareStartDate}
        compareEndDate={compareEndDate}
        setCompareEndDate={setCompareEndDate}
      />
      {/* 카드 테두리 Components */}
      {chartView !== "line" ? (
        <CardTemplate
          Element={AverageChart}
          startDate={startDate}
          endDate={endDate}
          compareStartDate={compareStartDate}
          compareEndDate={compareEndDate}
          Name={"평균비교"}
          Count={"+ 2.1%"}
          Info={" 전달 대비 평균 총점"}
        ></CardTemplate>
      ) : (
        <>
          <Button2
            filterSubject={filterSubject}
            setFilterSubject={setFilterSubject}
          />
          <CardTemplate
            Element={AverageChart2}
            filterSubject={filterSubject}
            startDate={startDate}
            endDate={endDate}
            compareStartDate={compareStartDate}
            compareEndDate={compareEndDate}
            Name={"평균추이"}
            Count={"+ 2.1%"}
            Info={" 전달 대비 평균 총점"}
          ></CardTemplate>
        </>
      )}
    </Cont>
  );
};

export default AverageChartWrap;
