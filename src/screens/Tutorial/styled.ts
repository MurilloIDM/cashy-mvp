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
  background-color: ${({ theme }) => theme.colors.gray_light};
`;

export const ContainerBackground = styled.View`
  width: 95%;
  height: 100%;
  margin-top: 24px;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ContainerBox = styled.View.attrs({
  elevation: 30
})`
  width: 100%;
  height: ${(Dimensions.get('window').height - 200) + "px"};
  position: absolute;
  top: 200px;
  padding: 25px;
  padding-bottom: 0;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.Image`
  width: 260px;
  height: 260px;
  z-index: 999;
  top: 84px;
  position: absolute;
`;

export const ImageLogo = styled.Image`
  width: 167px;
  height: 49px;
  top: 28px;
  position: absolute;
  align-self: center;
`;

export const ContainerContent = styled.View`
  padding-top: 130px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContainerText = styled.View`
  width: 100%;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${28 / fontScale}px`};
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TitleGreen = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${28 / fontScale}px`};
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Subtitle = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  text-align: center;
  margin-bottom: 16px;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Span = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  text-align: center;
  margin-bottom: 16px;
  ${({ fontScale }) => `line-height: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ContainerSimple = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 24px;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerButton = styled.View`
  width: 48%;
`;

export const ContainerButtonUnique = styled.View`
  width: 100%;
`;

export const TextButton = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  color: ${({ theme, colorName }) => theme.colors[colorName]};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const ImageCashyCoins = styled.Image`
  width: 80%;
  height: 180px;
  align-self: center;
`;
