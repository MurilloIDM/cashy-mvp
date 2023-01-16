import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
}

export const Container = styled.View`
  width: 80%;
  align-self: center;
  padding: 24px;
  border-radius: 36px;
  margin-bottom: 32px;
  overflow: hidden;
  flex-flow: row nowrap;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TextContainer = styled.View`
  width: 50%;
  align-self: flex-end;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Text = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${16 / fontScale}px`};
  text-align: left;
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Image = styled.Image`
  width: 50%;
  height: 180px;
`;