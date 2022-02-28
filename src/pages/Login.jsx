import React from "react";
import styled from "styled-components";

import logo from "../image/ollalogoLogin.svg";
import idIcon from "../image/Username.svg";
import passwordIcon from "../image/Password.svg";

const Login = () => {
  // 전체 페이지 Wrap
  const Background = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  // 로그인 wrap
  const Cont = styled.div`
    position: absolute;
    max-width: 20.5em;
    margin: 0 3em;
  `;
  // Logo Img
  const LogoImg = styled.img`
    max-width: 100%;
  `;
  // Login Wrap
  const LoginCont = styled.div`
    position: relative;
    max-width: 18.75em;
    height: 12.38em;
    margin: 3.48em auto 0;
  `;
  // Input Wrap
  const InputCont = styled.div`
    + div {
      margin-top: 1.25em;
    }
  `;
  // Icon
  const Icon = styled.img`
    position: absolute;
    margin-left: 0.75em;
    margin-top: 0.75em;
  `;
  // Input
  const Input = styled.input`
    width: 100%;
    height: 2.81rem;
    padding: 0 0 0 3.19em;
    border: 1px solid #c7c7c7;
    border-radius: 4px;
    box-sizing: border-box;
    color: #999;
    font-size: 0.88em;
    line-height: 1.25rem;
    font-family: "Montserrat", sans-serif;
    ::placeholder {
      color: #999;
      text-transform: uppercase;
    }
  `;
  // Button
  const Button = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.81rem;
    padding: 0;
    color: #febc56;
    background-color: #5d5fef;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    font-size: 1em;
    line-height: 1.25em;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
  `;
  return (
    <Background>
      <Cont>
        <LogoImg src={logo} alt="" />
        <LoginCont>
          <InputCont>
            <Icon src={idIcon} alt="id" />
            <Input type="text" placeholder="Username" />
          </InputCont>
          <InputCont>
            <Icon src={passwordIcon} alt="password" />
            <Input type="password" placeholder="password" />
          </InputCont>
          <Button>login</Button>
        </LoginCont>
      </Cont>
    </Background>
  );
};

export default Login;
