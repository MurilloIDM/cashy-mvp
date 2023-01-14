import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
  colorName?: string;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-bottom: 32px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Image = styled.Image`
  width: 220px;
  height: 220px;
  margin-top: 32px;
  border-radius: 220px;
  border: 6px solid ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageLogo = styled.Image`
  width: 304px;
  height: 194px;
  margin-top: 32px;
  align-self: center;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${28 / fontScale}px`};
  text-align: center;
  ${({ fontScale }) => `line-height: ${30 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: 24px;
  width: 90%;
`;

export const TitleGreen = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${28 / fontScale}px`};
  text-align: center;
  ${({ fontScale }) => `line-height: ${30 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: 12px;
  width: 90%;
`;

export const Subtitle = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  text-align: center;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: 24px;
  width: 90%;
`;

export const SubtitleGreen = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const ContainerButtons = styled.View`
  width: 90%;
  display: flex;
  position: absolute;
  bottom: 24px;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ContainerButton = styled.View`
  width: 48%;
`;

export const TextButton = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  color: ${({ theme, colorName }) => theme.colors[colorName]};
  font-family: ${({ theme }) => theme.fonts.black};
`;