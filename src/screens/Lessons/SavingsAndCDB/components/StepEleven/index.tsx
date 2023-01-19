import React from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";

import { ILesson, LessonContext } from "../../../../../context/LessonContext";

import {
  BoxText,
  ContainerButton,
  ContainerButtons,
  Footer,
  ImageLogo,
  SpanGreen,
  Subtitle,
  SubtitleGreenWithoutBackground,
  Text,
  TextButton,
  TextExtraInfo,
} from "../../../styled";

export function StepEleven() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateProgress, updateCurrentStep } = React.useContext<ILesson>(LessonContext);

  function handleClickOptionOne() {
    updateCurrentStep("step-thirteen");
    updateProgress(9, 9);
  }

  function handleClickOptionTwo() {
    updateCurrentStep("step-twelve");
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Agora que você sabe a diferença é com você!
        </Text>

        <TextExtraInfo fontScale={fontScale}>Clique na alternativa que você acha correta.</TextExtraInfo>
      </BoxText>

      <Subtitle fontScale={fontScale}>
        <SubtitleGreenWithoutBackground fontScale={fontScale}>Poupança</SubtitleGreenWithoutBackground> ou
        <SubtitleGreenWithoutBackground fontScale={fontScale}> CDB</SubtitleGreenWithoutBackground>?
      </Subtitle>

      <Text fontScale={fontScale} style={{ textAlign: "center", color: "#FFF", marginTop: 12 }}>
        Te faço <SpanGreen fontScale={fontScale}>perder</SpanGreen> dinheiro.{"\n"}
        Tenho <SpanGreen fontScale={fontScale}>menos</SpanGreen> opções.{"\n"}
        Rendo <SpanGreen fontScale={fontScale}>mensalmente</SpanGreen>.
      </Text>

      <Footer>
        <ContainerButtons>
          <ContainerButton>
            <Button onPress={handleClickOptionOne}>
              <TextButton
                colorName="green"
                fontScale={fontScale}
              >
                Poupança
              </TextButton>
            </Button>
          </ContainerButton>

          <ContainerButton>
            <Button onPress={handleClickOptionTwo}>
              <TextButton
                colorName="green"
                fontScale={fontScale}
              >
                CDB
              </TextButton>
            </Button>
          </ContainerButton>
        </ContainerButtons>

        <ProgressBar progress={progress} />
      </Footer>
    </>
  );
}
