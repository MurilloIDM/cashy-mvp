import React from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";

import { ILesson, LessonContext } from "../../../../../context/LessonContext";

import {
  BoxText,
  ContainerButtonUnique,
  Footer,
  ImageLogo,
  SpanGreen,
  Subtitle,
  SubtitleGreenWithoutBackground,
  Text,
  TextExtraInfo
} from "../../../styled";

export function StepSix() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateCurrentStep,  updateProgress } = React.useContext<ILesson>(LessonContext);

  function handleClickOptionOne() {
    updateCurrentStep("step-eight");
    updateProgress(9, 5);
  }

  function handleClickOptionTwo() {
    updateCurrentStep("step-seven");
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Ótimo! Agora vamos confirmar o que acabamos de aprender.
        </Text>

        <TextExtraInfo fontScale={fontScale}>
          Clique na alternativa que você achar correta.
        </TextExtraInfo>
      </BoxText>

      <Subtitle fontScale={fontScale}>
        O que é um <SubtitleGreenWithoutBackground fontScale={fontScale}>CDB</SubtitleGreenWithoutBackground>?
      </Subtitle>

      <Footer>
        <ContainerButtonUnique>
          <Button onPress={handleClickOptionOne} borderColor="#FFF">
            <Text fontScale={fontScale} style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
              CDB é um investimento que rende
              <SpanGreen fontScale={fontScale}> mais</SpanGreen> que a poupança.
            </Text>
          </Button>
        </ContainerButtonUnique>

        <ContainerButtonUnique>
          <Button onPress={handleClickOptionTwo} borderColor="#FFF">
            <Text fontScale={fontScale} style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
              CDB é um investimento que rende
              <SpanGreen fontScale={fontScale}> menos</SpanGreen> e é mais arriscado que a poupança.
            </Text>
          </Button>
        </ContainerButtonUnique>

        <ProgressBar progress={progress} />
      </Footer>
    </>
  );
}
