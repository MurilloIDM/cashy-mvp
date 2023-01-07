import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
}

export const Container = styled.View`
  width: 100%;
  height: 235px;
  padding: 24px;
  max-height: 235px;
  border-radius: 36px;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerText = styled.View`
  align-self: flex-end;
  width: 50%;
`;

export const Image = styled.Image`
  align-self: center;
  width: 50%;
`;

export const Title = styled.Text<ITextProps>`
   ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: left;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Text = styled.Text<ITextProps>`
   ${({ fontScale }) => `font-size: ${16 / fontScale}px`};
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.book};
`;