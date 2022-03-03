import React from 'react'
import styled from 'styled-components'
import CardTemplate from './CardTemplate'
import RangeChart from './RangeChart'

const DistributionChartWarp = () => {
  //점수대별 인원 Wrap
  const Cont = styled.div`
    width: 100%;
  `
  // Element 대신 Chart를 넣어주시면 됩니다. MaxScore 참조
  // const Element = styled.div`
  //   width: 90%;
  //   height: 23em;
  //   margin: 3em auto 0;
  //   background: #ccc;
  // `
  return (
    <Cont>
      {/* 카드 테두리 Components */}
      <CardTemplate Element={RangeChart} Name={'점수대별 인원'} year="2022" month="2" />
    </Cont>
  )
}

export default DistributionChartWarp
