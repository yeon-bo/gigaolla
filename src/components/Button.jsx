import React from "react";
import styled from "styled-components";

const Button = ({ Name }) => {
  // Card Template Wrap
  const Cont = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 4.13em;
    height: 2.44em;
    font-family: "Noto Sans KR", sans-serif;
    background: #ddd;
    border-radius: 0.8em;
  `;
  // 전체 위치 고정
  const TextCont = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `;
  const Text = styled.span`
  font-size: 0.88em;
  `
  return (
    <Cont>
      <TextCont>
          <Text>{Name}</Text>
      </TextCont>
    </Cont>
  );
};

export default Button;
