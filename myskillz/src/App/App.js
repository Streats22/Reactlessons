import Question from "../Question/Question";
import './App.css';
import React, { Component }  from 'react';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>

        <Question />
      </BrowserRouter>
  );
}

export default App;
