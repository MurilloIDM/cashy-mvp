import React from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";

import { ILesson, LessonContext } from "../../../../../context/LessonContext";

import { BoxText, ContainerButtonUnique, Footer, ImageLogo, Span, Text, TextButton } from "../../../styled";

export function StepFour() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateCurrentStep,  updateProgress } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-five");
    updateProgress(4, 3);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Em poucas palavras, temos: {"\n"}
          <Span fontScale={fontScale}>Ativos:</Span> trazem dinheiro ao longo do tempo. {"\n"}
          <Span fontScale={fontScale}>Passivos:</Span> te fazem perder dinheiro ao longo do tempo. {"\n\n"}

          Conseguiu reparar uma coisa ai no meio?
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
