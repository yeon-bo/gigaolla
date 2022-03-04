import React from "react";
import styled from "styled-components";

import HomeAttendChart from "./HomeAttendChart";
import CardTemplate from "./CardTemplate";

const HomeAttendChartWrap = () => {
  // 응시율 Wrap
  const Cont = styled.div`
    width: 100%;
  `;

  return (
    <Cont>
      <CardTemplate
        Element={HomeAttendChart}
        Name={"응시율"}
        Info={" 최근 6개월"}
      />
    </Cont>
  );
};

export default HomeAttendChartWrap;
