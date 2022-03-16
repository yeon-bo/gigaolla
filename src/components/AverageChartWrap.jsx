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
  const [chartView, setChartView] = useState("bar");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [info, setInfo] = useState(" 전달 대비 응시율");

  useEffect(() => {
    let startYear = startDate.getFullYear().toString().substr(2);
    let startMonth = startDate.getMonth() + 1;
    startMonth = startMonth < 10 ? `0${startMonth}` : startMonth;
    let endYear = endDate.getFullYear().toString().substr(2);
    let endMonth = endDate.getMonth() + 1;
    endMonth = endMonth < 10 ? `0${endMonth}` : endMonth;

    setInfo(
      chartView === "compareBar"
        ? ` ${startYear}.${startMonth} 대비 ${endYear}.${endMonth} 응시율`
        : " 전달 대비 응시율"
    );
  }, [chartView, startDate, endDate]);

  return (
    <Cont>
      <ChartTab
        setChartView={setChartView}
        view={chartView}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      {/* 카드 테두리 Components */}
      {chartView !== "line" ? (
        <CardTemplate
          Element={AverageChart}
          Name={"평균비교"}
          Count={"+ 2.1%"}
          Info={" 전달 대비 평균 총점"}
        ></CardTemplate>
      ) : (
        <>
          <Button2 />
          <CardTemplate
            Element={AverageChart2}
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
