import React from "react";
import { StyledButton } from "./styles";

function Button({ inverse = false }) {
  return <StyledButton as="a" href="#" inverse={inverse}>按钮</StyledButton>;
}

export default Button;
