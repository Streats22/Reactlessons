import Question from "../Question/Question";
import './App.css';
import Intro from "../Intro/Intro";
import React, { Component }  from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
      <Routes>
          <Route  path="/question" element={<Question />}></Route>
          <Route  path="/" element={<Intro />}></Route>
      </Routes>
      </>
  );
}

export default App;
