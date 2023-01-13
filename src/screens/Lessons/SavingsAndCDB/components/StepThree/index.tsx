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
  Text,
  TextButton
} from "../../../styled";

export function StepThree() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateCurrentStep,  updateProgress } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-five");
    updateProgress(9, 3);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Ótimo, mas que tal revisarmos?
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
