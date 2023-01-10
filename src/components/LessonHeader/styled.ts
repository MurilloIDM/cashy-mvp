import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
  textAlign: string;
}

export const Container = styled.View`
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const TextWhite = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  ${({ fontScale }) => `line-height: ${21 / fontScale}px`};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TextGreen = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  ${({ fontScale }) => `line-height: ${21 / fontScale}px`};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;