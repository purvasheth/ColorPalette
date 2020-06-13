import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 0px 5px 0px 0.5px;
  border: transparent;
  color: black;
  font-size: 1rem;
  border-bottom: 0.15rem solid darkgrey;
  width: 9rem;
`;

const Input = (props) => {
  const c = props.color;
  return (
    <StyledInput
      value={c.label}
      onChange={(e) =>
        props.dispatch({
          type: "label",
          payload: { hex: c.hex, label: e.target.value },
        })
      }
    />
  );
};
export default Input;
