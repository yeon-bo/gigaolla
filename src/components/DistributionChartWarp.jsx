import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getLastMonth } from '../utils/getLastMonth'
import CardTemplate from './CardTemplate'
import DistributionChart from './DistributionChart'
import DistributionChart2 from './DistributionChart2'
import DistributionChart3 from './DistributionChart3'

const Cont = styled.div`
  width: 100%;
`

const DistributionChartWarp = () => {
  //점수대별 인원 Wrap
  const params = useParams()
  const SUBJECT = params.subject

  const { thisYear, lastMonth } = getLastMonth()

  if (SUBJECT === '경찰') {
    return (
      <Cont>
        {/* 카드 테두리 Components */}
        <CardTemplate
          Element={DistributionChart}
          Name="점수대별 인원"
          year={thisYear}
          month={lastMonth}
        />
      </Cont>
    )
  }
  if (SUBJECT === '소방') {
    return (
      <Cont>
        {/* 카드 테두리 Components */}
        <CardTemplate
          Element={DistributionChart2}
          Name="점수대별 인원"
          year={thisYear}
          month={lastMonth}
        />
      </Cont>
    )
  }
  if (SUBJECT === '행정') {
    return (
      <Cont>
        {/* 카드 테두리 Components */}
        <CardTemplate
          Element={DistributionChart3}
          Name="점수대별 인원"
          year={thisYear}
          month={lastMonth}
        />
      </Cont>
    )
  }

  // Element 대신 Chart를 넣어주시면 됩니다. MaxScore 참조
  // const Element = styled.div`
  //   width: 90%;
  //   height: 23em;
  //   margin: 3em auto 0;
  //   background: #ccc;
  // `
}

export default DistributionChartWarp
