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
  TextButton,
} from "../../../styled";

export function StepSeven() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateCurrentStep } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-six");
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Quase <SpanGreen fontScale={fontScale}>lá</SpanGreen>! {"\n"}
          Que tal tentarmos de novo?
        </Text>
      </BoxText>

      <Footer>
        <ContainerButtonUnique>
          <Button onPress={handleClickNext}>
              <TextButton
                colorName="green"
                fontScale={fontScale}
              >
                Tentar novamente
              </TextButton>
            </Button>
        </ContainerButtonUnique>

        <ProgressBar progress={progress} />
      </Footer>
    </>
  );
}
