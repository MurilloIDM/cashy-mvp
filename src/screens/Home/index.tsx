import * as React from "react";
import { LayoutChangeEvent, StatusBar, useWindowDimensions } from "react-native";

import { Button } from "../../components/Button";

import {
  Container,
  ContainerBackground,
  ContainerContent,
  ImageBackground,
  Title,
  TextContent,
  TextButton
} from "./styled";

export function HomeScreen({ navigation }) {
  const { height: heightScreen } = useWindowDimensions();

  const [heightContainerContent, setHeightContainerContent] = React.useState(null);

  function onLayoutContainer(event: LayoutChangeEvent): void {
    const { height } = event.nativeEvent.layout

    const percentege = (height * 100) / heightScreen;
    setHeightContainerContent(percentege);
  }

  const backgroundImage = heightContainerContent > 50
    ? require("../../../assets/home-background-2.png")
    : require("../../../assets/home-background.png");

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#EEE"
      />

      <ContainerBackground>
      </ContainerBackground>

      <ImageBackground source={backgroundImage} />

      <ContainerContent
        endFillColor={"#000"}
        onLayout={onLayoutContainer}
      >
        <Title>Vem com a cashy e ganhe seu certificado!</Title>

        <TextContent>
          Aprenda a cuidar do seu dinheiro enquanto joga! De forma descomplicada junte CashyCoins e consiga
          seu certificado exclusivo!
        </TextContent>

        <Button
          onPress={() => navigation.navigate("Login")}
        >
          <TextButton>
            Começar
          </TextButton>
        </Button>
      </ContainerContent>      

    </Container>
  );
}