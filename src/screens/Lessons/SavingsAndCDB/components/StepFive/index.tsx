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
  Text,
  TextButton
} from "../../../styled";

export function StepFive() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateCurrentStep,  updateProgress } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-six");
    updateProgress(9, 4);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
         Um CDB nada mais é do que você realizar um empréstimo para um determinado banco.
         {"\n\n"}
         Os riscos chegam a ser tão mínimos quanto a poupança e com uma diferença...
         {"\n\n"}
         <SpanGreen fontScale={fontScale}>Rende mais</SpanGreen> que a
         <SpanGreen fontScale={fontScale}> inflação</SpanGreen> e
         <SpanGreen fontScale={fontScale}> diariamente</SpanGreen>!
        </Text>
      </BoxText>

      <Footer>
        <ContainerButtonUnique>
          <Button onPress={handleClickNext}>
              <TextButton
                colorName="green"
                fontScale={fontScale}
              >
                Continuar
              </TextButton>
            </Button>
        </ContainerButtonUnique>

        <ProgressBar progress={progress} />
      </Footer>
    </>
  );
}
