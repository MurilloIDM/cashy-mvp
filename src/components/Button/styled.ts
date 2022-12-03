import styled from "styled-components/native";
import { ButtonProps } from ".";

export const ButtonPressable = styled.Pressable<ButtonProps>`
  width: 100%;
  padding: 10px 0;
  border-radius: 36px;
  border: 1px solid ${({ borderColor, theme }) => borderColor || theme.colors.green};
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.white};;
`;
