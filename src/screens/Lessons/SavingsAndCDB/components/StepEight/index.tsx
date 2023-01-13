import React from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";
import { AccessContext, IValueAccessContext } from "../../../../../context/AccessContext";

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

export function StepEight() {
  const { fontScale } = useWindowDimensions();
  const { user } = React.useContext<IValueAccessContext>(AccessContext);
  const { progress, updateProgress, updateCurrentStep } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-nine");
    updateProgress(9, 6);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          <SpanGreen fontScale={fontScale}>Muito bem,</SpanGreen> {user?.firstname}! {"\n"}
          Agora dá uma olhada comparando a poupança com um CDB que rende 15,8% ao ano, com um investimento inicial de R$ 1.000,00 em 12 meses.
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
