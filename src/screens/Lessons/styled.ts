import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
  colorName?: string;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ContainerIn = styled.View`
  width: 90%;
  height: 100%;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ImageLogoFull = styled.Image`
  width: 204px;
  height: 204px;
  margin-top: 12px;
  align-self: center;
`;

export const ImageLogo = styled.Image`
  width: 204px;
  height: 130px;
  margin-top: 12px;
  align-self: center;
`;

export const BoxText = styled.View`
  width: 100%;
  padding: 24px;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  text-align: left;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TextExtraInfo = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${16 / fontScale}px`};
  text-align: left;
  margin-top: 12px;
  ${({ fontScale }) => `line-height: ${20 / fontScale}px`};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const Span = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  text-align: left;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const SpanGreen = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  text-align: left;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${28 / fontScale}px`};
  text-align: center;
  ${({ fontScale }) => `line-height: ${30 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: 24px;
`;

export const Subtitle = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  ${({ fontScale }) => `line-height: ${28 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: 32px;
`;

export const SubtitleGreenWithoutBackground = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  ${({ fontScale }) => `line-height: ${28 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
  padding: 24px;
  border-radius: 12px;
`;

export const SubtitleGreen = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  ${({ fontScale }) => `line-height: ${28 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 32px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const ContainerButton = styled.View`
  width: 48%;
`;

export const ContainerButtonUnique = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const TextButton = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  color: ${({ theme, colorName }) => theme.colors[colorName]};
  font-family: ${({ theme }) => theme.fonts.black};
`;