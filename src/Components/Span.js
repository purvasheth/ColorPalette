import React from "react";
import styled from "styled-components";

const SmallButton = styled.button`
  background: url(${(props) => props.link});
  background-color: white;
  width: 1.5rem;
  height: 1.5rem;
  margin: 15px 5px 15px 5px;
  border: transparent;
  border-radius: 0.15rem;
`;
const StyledSpan = styled.span`
  height: 4rem;
  width: 9rem;
  margin: 5px;
  display: flex;
  flex-direction: row;
  aline-items: baseline;
  justify-content: center;
`;
const Div = styled.div`
  padding: 5px;
`;

const Span = (props) => {
  const c = props.color;
  return (
    <StyledSpan
      style={{ background: `${c.hex}` }}
      onMouseEnter={() =>
        props.dispatch({
          type: "hover",
          payload: { hex: c.hex, hover: true },
        })
      }
      onMouseLeave={() =>
        props.dispatch({
          type: "hover",
          payload: { hex: c.hex, hover: false },
        })
      }
    >
      {c.hover === true && (
        <Div>
          <SmallButton
            link="https://img.icons8.com/material/24/000000/delete-forever--v1.png"
            onClick={() =>
              props.dispatch({ type: "delete", payload: { hex: c.hex } })
            }
          />
          <SmallButton
            link="https://img.icons8.com/android/24/000000/plus.png"
            onClick={() => {
              props.setUpdate(c.hex);
              props.setHex(c.hex);
              props.setDisplayPicker(true);
            }}
          />
        </Div>
      )}
    </StyledSpan>
  );
};

export default Span;
