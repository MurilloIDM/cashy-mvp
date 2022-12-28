import React from  "react";
import { StatusBar } from "react-native";

import { CurrentStep } from "./components/CurrentStep";

import { TutorialProvider } from "../../context/TutorialContext";

import {
  Container,
  ContainerBackground,
  ContainerBox,
  ContainerContent,
  Image,
  ImageLogo
} from "./styled";

export function TutorialScreen() {
  return (
    <TutorialProvider>
      <Container>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#EEE"
        />

        <ContainerBackground>
        </ContainerBackground>

        <ImageLogo source={require("../../../assets/logo-clara.png")} />

        <Image source={require("../../../assets/logo-baixo.png")} />

        <ContainerBox>
          <ContainerContent>
            <CurrentStep />
          </ContainerContent>
        </ContainerBox>

      </Container>
    </TutorialProvider>
  );
}