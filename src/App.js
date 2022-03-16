import React, { useState } from "react";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { CgDarkMode } from "react-icons/cg";

import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Class from "../src/pages/Class";
import { defaultTheme, darkTheme } from "./utils/theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./utils/atoms";
import Navigation from "./components/Navigation";
import { signIn } from "./utils/auth";
import PrivateRoute from "./lib/PrivateRoute";

const Darkmode = styled.button`
  width: 3em;
  height: 3em;
  position: absolute;
  top: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  z-index: 1;
  /* background-color: black; */

  & > * {
    font-size: 2em;
    cursor: pointer;
    position: absolute;
  }
`;

function App() {
  // RECOIL : 다크모드
  const isDark = useRecoilValue(isDarkAtom);
  const setIsDark = useSetRecoilState(isDarkAtom);
  const changeTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="App">
      <ThemeProvider theme={isDark ? darkTheme : defaultTheme}>
        <Reset />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/:subject" element={<PrivateRoute />}>
            <Route path="/:subject" element={<Class />}>
              <Route path="/:subject/:number" />
            </Route>
          </Route>
        </Routes>
        {/* 다크모드버튼 */}
        <Darkmode onClick={changeTheme}>
          <CgDarkMode />
        </Darkmode>
      </ThemeProvider>
    </div>
  );
}
export default App;
