import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-bottom: 32px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Image = styled.Image`
  width: 304px;
  height: 204px;
  margin-top: 32px;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`}
  padding: 0px 24px;
  text-align: center;
  margin: 32px 0;
  width: 90%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TitleGreen = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`}
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TextError = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${16 / fontScale}px`}
  text-align: left;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const Form = styled.View`
  width: 100%;
  padding: 0 32px;
`;

export const FormContent = styled.View`
  width: 100%;
`;

export const CardContainer = styled.View`
  width: 100%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  align-self: center;
  padding: 0 32px;
  bottom: 24px;
`;


export const TextButton = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`}
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;
