import React from "react";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Class from "../src/pages/Class";

function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/class=:subject" element={<Class />} />
        <Route path="/class=:subject&classn=:number" element={<Class />} />
      </Routes>
    </div>
  );
}
export default App;
