import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
}

export const Card = styled.View`
  width: 280px;
  height: 205px;
  max-height: 205px;
  margin: 0 12px;
  border-radius: 36px;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  padding: 24px;
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
  ${({ fontScale }) => `font-size: ${16 / fontScale}px`};
  text-align: left;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Text = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${11 / fontScale}px`};
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const CardBlocked = styled.View`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CardCompleted = styled.View`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;