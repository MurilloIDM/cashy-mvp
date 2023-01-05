import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  height: 80px;
  padding: 16px 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const ContainerInfosUser = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 14px;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.book};
`;

export const Image = styled.Image`
  width: 53px;
  height: 53px;
  margin-left: 12px;
`;