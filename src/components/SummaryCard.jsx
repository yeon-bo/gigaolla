import React from "react";
import styled from "styled-components";

const SummaryCard = ({ Title }) => {
  const Cont = styled.div`
    position: relative;
    padding: 2.38em 1.19em;
    box-sizing: border-box;
    width: 19.31em;
    height: 7.5em;
    font-family: "Noto Sans KR", sans-serif;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    + div {
      margin-left: 1.88em;
    }
  `;
  const TextCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `;
  const TextName = styled.span`
    font-size: 1.25em;
    line-height: 1.69rem;
    color: #8898aa;
  `;
  const TextCountCont = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: 0;
    top: 2.38em;
  `;
  const TextCount = styled.div`
    display: flex;
    align-items: center;
    font-size: 1em;
    line-height: 1.38rem;
    color: #999999;
  `;
  const TextNumber = styled.span`
    font-weight: bold;
    font-size: 2em;
    line-height: 2.75rem;
    color: #050505;
  `;
  const TextIncrease = styled.span`
    font-weight: bold;
    font-size: 0.94em;
    line-height: 1.25rem;
    color: #2dce89;
    margin: 0 1.16rem 0 1.25rem;
  `;
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
  );
};

export default SummaryCard;
