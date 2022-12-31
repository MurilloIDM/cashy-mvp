import MaskInput from "react-native-mask-input";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const TextInput = styled.TextInput`
  width: 100%;
  font-size: 24px;
  padding: 2px 6px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.book};
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.black_opacity_60};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.black};
`;

export const TextInputMask = styled(MaskInput)`
  width: 100%;
  font-size: 24px;
  padding: 2px 6px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.book};
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.black_opacity_60};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.black};
`;