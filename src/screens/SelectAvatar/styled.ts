import styled from "styled-components/native";

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
  top: 4px;
  position: absolute;
  align-self: center;
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 60%;
  margin-top: -64px;
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
  max-height: 575px;
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
  position: relative;
  top: 18%;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Span = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.green};
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const TextButton = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.black};
`;
