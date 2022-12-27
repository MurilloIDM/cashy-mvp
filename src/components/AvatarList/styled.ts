import styled from "styled-components/native";

export const Image = styled.Image<{ isSelected: boolean }>`
  width: 250px;
  height: 250px;
  margin: 0px -24px;
  ${({ isSelected }) => isSelected ? "transform: scale(1.1)" : ""};
`