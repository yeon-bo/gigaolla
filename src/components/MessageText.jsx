import React from "react";
import styled from "styled-components";

const MessageText = ({ Name }) => {
  // Card Template Wrap
  const Cont = styled.div`
    width: 82.81em;
    height: 5em;
    margin: 7.5em auto 0;
    background: #214680;
    border-radius: 16px;
    overflow: hidden;
    @media screen and (max-width: 1712px) {
      font-size: 0.9vw;
    }
  `;
  // 전체 위치 고정
  const TextCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Text = styled.span`
    padding: 0 1em;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-size: 2em;
    color: #fff;
    line-height: 1.36em;
  `;
  return (
    <Cont>
      <TextCont>
        <Text>
          경찰직, 목표 점수 달성도가 90%가 넘은 학생은 N명이며 저번 시험 대비 N%
          올랐습니다.
        </Text>
      </TextCont>
    </Cont>
  );
};

export default MessageText;
