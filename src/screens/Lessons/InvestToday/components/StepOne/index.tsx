import React from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";

import { AccessContext, IValueAccessContext } from "../../../../../context/AccessContext";
import { ILesson, LessonContext } from "../../../../../context/LessonContext";

import { BoxText, ContainerButton, ContainerButtons, Footer, ImageLogo, Text, TextButton } from "../../styled";

export function StepOne() {
  const { fontScale } = useWindowDimensions();
  const { user } = React.useContext<IValueAccessContext>(AccessContext);
  const { progress, updateCurrentStep,  updateProgress } = React.useContext<ILesson>(LessonContext);

  function handleClickYes() {
    updateCurrentStep("step-two");
    updateProgress(4, 1);
  }

  function handleClickNo() {
    updateCurrentStep("step-three");
    updateProgress(4, 1);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          {user?.firstname}, sabe o que são ativos e passivos?
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
