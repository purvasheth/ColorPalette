import React from "react";
import "./App.css";
import Main from "./Main";
import styled from "styled-components";

//import ColorPicker from './ColourPicker';

const Heading = styled.h1`
  margin: 10px;
`;

function App() {
  return (
    <div className="App">
      <Heading>Color Palette</Heading>
      <Main />
    </div>
  );
}
export default App;
