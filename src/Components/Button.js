import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px;
  height: 4rem;
  width: 9rem;
  background: url("https://img.icons8.com/android/24/000000/plus.png") no-repeat;
  background-color: lightgrey;
  cursor: pointer;
  margin: 40px 15px 40px 15px;
  background-position: 3.5rem center;
  border: transparent;

  &::-moz-focus-inner {
    border: 0;
  }
`;

const Button = (props) => {
  return <StyledButton onClick={props.handleClick} />;
};

export default Button;
