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
  TextButton,
  ContainerButton
} from "./styled";

export function HomeScreen({ navigation }) {
  const { height: heightScreen, fontScale } = useWindowDimensions();

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
        <Title fontScale={fontScale}>Aprenda com a Cashy!</Title>

        <TextContent fontScale={fontScale}>
          Cuide do seu dinheiro enquanto joga, com os CashyCoins você obtém um certificado exclusivo.
        </TextContent>

      </ContainerContent>
      
      <ContainerButton>
        <Button
          onPress={() => navigation.navigate("Login")}
        >
          <TextButton fontScale={fontScale}>
            Começar
          </TextButton>
        </Button>
      </ContainerButton>
    </Container>
  );
}