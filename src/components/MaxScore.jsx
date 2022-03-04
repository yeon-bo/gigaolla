import React from 'react'
import styled from 'styled-components'

// 당월 최고 점수 Wrap
const Cont = styled.div`
  width: 100%;
  height: 30em;
  margin: 3em auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextCont = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  color: #32325d;
`
const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25em;
  line-height: 1.69rem;
  + span {
    margin-top: 3.75rem;
  }
`
const Score = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  line-height: 2.06rem;
  margin-left: 2.56rem;
`

// 당월 최고 점수 내용
const MaxScore = () => {
  return (
    <Cont>
      <TextCont>
        <Text>
          총점<Score>232.50</Score>
        </Text>
        <Text>
          경찰학<Score>97.50</Score>
        </Text>
        <Text>
          형사법<Score>95.00</Score>
        </Text>
        <Text>
          헌법<Score>45.00</Score>
        </Text>
      </TextCont>
    </Cont>
  )
}

export default MaxScore
