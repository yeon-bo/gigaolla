import React from "react";
import styled from "styled-components";

import CardTemplate from "./CardTemplate";
import AxiosApi from "./AxioApi";

const AverageChartWrap = () => {
  // 평균점수 Wrap
  const Cont = styled.div`
    width: 100%;
  `;
  // Element 대신 Chart를 넣어주시면 됩니다. MaxScore 참조
  const Element = styled.div`
    width: 90%;
    height: 23em;
    margin: 3em auto 0;
    background: #ccc;
  `;
  return (
    <Cont>
      {/* 카드 테두리 Components */}
      <CardTemplate
        Element={AxiosApi}
        Name={"평균점수"}
        Count={"+ 2.1%"}
        Info={" 전달 대비 평균 총점"}
      ></CardTemplate>
    </Cont>
  );
};

export default AverageChartWrap;
