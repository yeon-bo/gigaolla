import React from "react";
import styled from "styled-components";

import CardTemplate from "./CardTemplate";

const MaxScoreChart = () => {
  const Cont = styled.div`
    width: 24.25em;
    height: 100%;
    margin-right: 5.31em;
  `;
  const Element = styled.div`
    width: 90%;
    height: 23em;
    margin: 3em auto 0;
    background: #ccc;
  `;
  return (
    <Cont>
      <CardTemplate Element={Element} Name={"당월 최고 점수"} />
    </Cont>
  );
};

export default MaxScoreChart;
