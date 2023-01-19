import React from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";

import { ILesson, LessonContext } from "../../../../../context/LessonContext";

import {
  BoxText,
  ContainerButtonUnique,
  Footer,
  GraphicTwo,
  ImageLogo,
  Text,
  TextButton,
  TextExtraInfo,
} from "../../../styled";

export function StepTen() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateProgress, updateCurrentStep } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-eleven");
    updateProgress(9, 8);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Da uma olhada em 2 anos! {"\n"}
          A diferença já passa de 170,8%
        </Text>

        <TextExtraInfo fontScale={fontScale}>Fonte: Toro Investimentos</TextExtraInfo>
      </BoxText>

      <GraphicTwo source={require("../../../../../../assets/graf_2.png")} />

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
