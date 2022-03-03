import React from "react";
import styled from "styled-components";
import AttendChart from "./AttendChart";
import CardTemplate from "./CardTemplate";

const AttendChartWrap = () => {
  // 응시율 Wrap
  const Cont = styled.div`
    width: 100%;
  `;
  // Element 대신 Chart를 넣어주시면 됩니다. MaxScore 참조
  return (
    <Cont>
      {/* 카드 테두리 Components */}
      <CardTemplate
        Element={AttendChart}
        Name={"응시율"}
        Count={"+ 2.1%"}
        Info={" 전달 대비 응시율"}
      />
    </Cont>
  );
};

export default AttendChartWrap;
