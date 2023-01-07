import styled from "styled-components/native";

interface ITextProps {
  fontScale: number;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ContainerTitle = styled.View`
  width: 90%;
  margin-top: 24px;
  align-self: center;
`;

export const Title = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${28 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TitleSpan = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${28 / fontScale}px`};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const ContainerSubtitle = styled.View`
  width: 90%;
  margin: 24px 0;
  align-self: center;
`;

export const Subtitle = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.book};
`; 

export const SubtitleBold = styled.Text<ITextProps>`
  ${({ fontScale }) => `font-size: ${18 / fontScale}px`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
