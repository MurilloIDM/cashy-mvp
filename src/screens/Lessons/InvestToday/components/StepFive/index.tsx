import React from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";

import { ILesson, LessonContext } from "../../../../../context/LessonContext";

import { BoxText, ContainerButtonUnique, Footer, ImageLogo, Span, Text, TextButton } from "../../../styled";

export function StepFive() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateCurrentStep,  updateProgress } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-six");
    updateProgress(4, 4);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          O tempo é o principal fator que influencia o dinheiro, seja diretamente ou indiretamente, quanto mais cedo você começar a investir (hoje) melhor será sua recompensa no longo do prazo.
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
