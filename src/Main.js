import React, { useState, useEffect, useReducer } from "react";
import ColourPicker from "./Components/ColourPicker";
import Button from "./Components/Button";
import Palette from "./Components/Palette";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const initialState = JSON.parse(localStorage.getItem("key")) || [];

const reducer = (state, action) => {
  const { hex, label, hover, prev, rgb } = action.payload;
  switch (action.type) {
    case "add":
      const newColor = {
        hex: hex.toUpperCase(),
        label: "Label",
        hover: false,
        rgb: rgb.r + " / " + rgb.g + " / " + rgb.b,
      };
      return [...state, newColor];

    case "hover":
      return state.map((c) => (c.hex === hex ? { ...c, hover } : c));

    case "color":
      return state.map((c) =>
        c.hex === prev
          ? { ...c, hex, rgb: rgb.r + " / " + rgb.g + " / " + rgb.b }
          : c
      );

    case "delete":
      return state.filter((c) => c.hex !== hex);

    case "label":
      return state.map((c) => (c.hex === hex ? { ...c, label } : c));

    default:
      console.log("default");
  }
};

const Main = () => {
  const [displayPicker, setDisplayPicker] = useState(false);
  const [rgb, setRGB] = useState({ r: 0, g: 0, b: 0 });
  const [hex, setHex] = useState("#000000");
  const [update, setUpdate] = useState("");
  const [colors, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleClose = () => {
    setDisplayPicker(false);
    if (update !== "") {
      dispatch({
        type: "color",
        payload: { prev: update, hex, rgb },
      });
      setUpdate("");
    } else {
      dispatch({ type: "add", payload: { hex, rgb } });
    }
  };

  const handleReject = () => {
    setDisplayPicker(false);
  };

  const handleChange = (color) => {
    setHex(color.hex);
    setRGB(color.rgb);
  };

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(colors));
  }, [colors]);

  return (
    <MainDiv>
      <Palette
        colors={colors}
        setUpdate={setUpdate}
        setDisplayPicker={setDisplayPicker}
        dispatch={dispatch}
        setHex={setHex}
      />

      <Button handleClick={handleClick} />

      <ColourPicker
        hex={hex}
        displayPicker={displayPicker}
        handleChange={handleChange}
        handleReject={handleReject}
        handleClose={handleClose}
      />
    </MainDiv>
  );
};

export default Main;
