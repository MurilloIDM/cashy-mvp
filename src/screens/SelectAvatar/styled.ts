import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
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

export const ImageLogo = styled.Image`
  width: 167px;
  height: 49px;
  top: 8px;
  position: absolute;
  align-self: center;
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 60%;
  top: -35px;
  position: absolute;
  transform: rotate(-60deg);
`;

export const ContainerContent = styled.View.attrs({
  elevation: 30
})`
  box-sizing: border-box;
  width: 100%;
  height: 575px;
  min-height: 340px;
  max-height: 520px;
  position: absolute;
  bottom: 0;
  padding: 25px;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerInfosUser = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${40 / fontScale}px`};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Subtitle = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Description = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${14 / fontScale}px`};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.book};
  margin-top: 12px;
`;

export const Span = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${20 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TextButton = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;
