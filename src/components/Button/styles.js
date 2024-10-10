import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 9px 26px;
  background: ${({ inverse, theme }) => (inverse ? "none" : theme.color)};
  border-radius: 8px;
  border: ${({ inverse, theme }) =>
    inverse ? "1px solid " + theme.color : "none"};
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;
