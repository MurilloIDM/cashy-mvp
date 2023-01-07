import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
}

export const ContainerScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #FBFBFB;
`;

export const ImageLogo = styled.Image`
  width: 167px;
  height: 49px;
  top: 4px;
  position: absolute;
  align-self: center;
`;

export const ImageMain = styled.Image`
  width: 100%;
  height: 57%;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${32 / fontScale}px`};
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Subtitle = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const Span = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 0 32px;
  margin: 24px 0;
`;

export const TextButton = styled.Text<ITextProps>`
  text-align: center;
  ${({ fontScale }) => `font-size: ${24 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const ContainerSocialLinks = styled.View`
  margin-top: 24px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 32px;
`;

export const ContainerContent = styled.View<{ hasImage: boolean }>`
  width: 100%;
  align-items: center;
  margin-top: ${({ hasImage }) => hasImage ? "-64px" : 0};
`;