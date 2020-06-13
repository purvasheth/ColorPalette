import React from "react";
import styled from "styled-components";
import Span from "./Span";
import Input from "./Input";

const Label = styled.label`
  font-size: 0.7rem;
  margin: 0px 10px 0px 10px;
`;
const ColorDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  margin: 10px 0px 10px 10px;
`;

const Palette = (props) => {
  return (
    <React.Fragment>
      {props.colors.map((color) => (
        <ColorDiv key={color.hex}>
          <Input color={color} dispatch={props.dispatch} />
          <br />
          <Span
            color={color}
            dispatch={props.dispatch}
            setUpdate={props.setUpdate}
            setHex={props.setHex}
            setDisplayPicker={props.setDisplayPicker}
          />
          <br />
          <Label>HEX {color.hex.toUpperCase()}</Label>
          <br />
          <Label>RGB {color.rgb}</Label>
        </ColorDiv>
      ))}
    </React.Fragment>
  );
};

export default Palette;
