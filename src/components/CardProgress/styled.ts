import styled from "styled-components/native";

import * as Progress from "react-native-progress";

export const ContainerOut = styled.View`
  width: 100%;
  align-self: center;
`;

export const ContainerIn = styled.View`
  width: 80%;
  height: 360px;
  align-self: center;
  border-radius: 36px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: left;
  margin-bottom: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Text = styled.Text`
  font-size: 12.5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const Circle = styled(Progress.Circle)`
  top: 110px;
  z-index: 3;
  position: absolute;
  align-self: center;
  margin: 12px 0;
`;

export const ImageRight = styled.Image`
  position: absolute;
  bottom: 46px;
  z-index: 1;
  right: 24px;
  width: 90px;
  height: 126px;
`;

export const ImageLeft = styled.Image`
  position: absolute;
  top: 76px;
  z-index: 1;
  left: 12px;
  width: 149px;
  height: 150px;
`;