import React from 'react'
import styled from 'styled-components'

// 전체 페이지 Wrap
const Cont = styled.div`
  position: relative;
  padding: 2.38em 1.19em;
  box-sizing: border-box;
  width: 19.31em;
  height: 7.5em;
  font-family: 'Noto Sans KR', sans-serif;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  + div {
    margin-left: 1.88em;
  }
`
// 정렬 Wrap
const TextCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
//'재학생', '응시생', '응시율'... Text
const TextName = styled.span`
  font-size: 1.25em;
  line-height: 1.69rem;
  color: #8898aa;
`
// '00명', '+0명' Wrap
const TextCountCont = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  top: 2.38em;
`
// '00명' Wrap
const TextCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
  line-height: 1.38rem;
  color: #999999;
`
// '00명'의 숫자 Text
const TextNumber = styled.span`
  font-weight: bold;
  font-size: 2em;
  line-height: 2.75rem;
  color: #050505;
`
// '+3명' Text
const TextIncrease = styled.span`
  font-weight: bold;
  font-size: 0.94em;
  line-height: 1.25rem;
  color: #2dce89;
  margin: 0 1.16rem 0 1.25rem;
`

//Class page 재학생, 응시생, 응시율... 카드
const SummaryCard = ({ Title }) => {
  return (
    <Cont>
      <TextCont>
        <TextName>{Title}</TextName>
        <TextCountCont>
          <TextCount>
            <TextNumber>103</TextNumber>명
          </TextCount>
          <TextIncrease>+3명</TextIncrease>
        </TextCountCont>
      </TextCont>
    </Cont>
  )
}

export default SummaryCard
