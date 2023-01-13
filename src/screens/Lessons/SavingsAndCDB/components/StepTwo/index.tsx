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
  Text,
  TextButton
} from "../../../styled";

export function StepTwo() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateCurrentStep,  updateProgress } = React.useContext<ILesson>(LessonContext);

  function handleClickYes() {
    updateCurrentStep("step-three");
    updateProgress(9, 2);
  }

  function handleClickNo() {
    updateCurrentStep("step-four");
    updateProgress(9, 2);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Você conhece a modalidade de investimentos <SpanGreen fontScale={fontScale}>CDB</SpanGreen>?
        </Text>
      </BoxText>

      <Footer>
        <ContainerButtons>
          <ContainerButton>
            <Button onPress={handleClickYes}>
                <TextButton
                  colorName="green"
                  fontScale={fontScale}
                >
                  Sim
                </TextButton>
              </Button>
          </ContainerButton>

          <ContainerButton>
            <Button borderColor="#DB385A" onPress={handleClickNo}>
                <TextButton
                  colorName="red"
                  fontScale={fontScale}
                >
                  Não
                </TextButton>
              </Button>
          </ContainerButton>
        </ContainerButtons>

        <ProgressBar progress={progress} />
      </Footer>
    </>
  );
}
