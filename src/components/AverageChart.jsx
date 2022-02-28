import React from "react";
import styled from "styled-components";

import CardTemplate from "./CardTemplate";

const AverageChart = () => {
  const Cont = styled.div`
    width: 100%;
    height: 100%;
  `;
  const Element = styled.div`
    width: 90%;
    height: 23em;
    margin: 3em auto 0;
    background: #ccc;
  `;
  return (
    <Cont>
      <CardTemplate
        Element={Element}
        Name={"평균점수"}
        Count={"+ 2.1%"}
        Info={" 전달 대비 응시율"}
      />
    </Cont>
  );
};

export default AverageChart;
