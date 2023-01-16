import MaskInput from "react-native-mask-input";
import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
  color?: string;
}


export const Container = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${16 / fontScale}px`};
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const TextInput = styled.TextInput<ITextProps>`
  width: 100%;
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  padding: 2px 6px;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  font-family: ${({ theme }) => theme.fonts.book};
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.black_opacity_60};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.black};
`;

export const TextInputMask = styled(MaskInput)<ITextProps>`
  width: 100%;
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  padding: 2px 6px;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  font-family: ${({ theme }) => theme.fonts.book};
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.black_opacity_60};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.white};
`;