import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-bottom: 32px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Image = styled.Image`
  width: 304px;
  height: 204px;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  padding: 0px 24px;
  text-align: left;
  margin: 32px 0;
  text-align: left;
  width: 90%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TitleGreen = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TextError = styled.Text`
  font-size: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const Form = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 32px;
`;

export const FormContent = styled.View`
  width: 100%;
  flex: 1;
`;

export const CardContainer = styled.View`
  width: 100%;
  flex: 1.16;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex: 1;
`;


export const TextButton = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;
