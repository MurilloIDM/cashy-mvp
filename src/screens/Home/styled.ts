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
  height: 80%;
  margin-top: 24px;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ContainerContent = styled.ScrollView.attrs({
  elevation: 30
})`
  width: 100%;
  height: auto;
  min-height: 340px;
  position: absolute;
  bottom: 0;
  padding: 25px;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 60%;
  margin-top: 32px;
  position: absolute;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${32 / fontScale}px`};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TextContent = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  margin: 16px 0 64px;
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const TextButton = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  text-align: center;
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;
