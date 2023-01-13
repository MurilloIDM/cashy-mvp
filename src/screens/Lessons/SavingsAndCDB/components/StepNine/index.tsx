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
  TextButton,
} from "../../../styled";

export function StepNine() {
  const { fontScale } = useWindowDimensions();
  const { progress, updateProgress, updateCurrentStep } = React.useContext<ILesson>(LessonContext);

  function handleClickNext() {
    updateCurrentStep("step-ten");
    updateProgress(9, 7);
  }

  return (
    <>
      <ImageLogo source={require("../../../../../../assets/logo-baixo-cortada.png")} />

      <BoxText>
        <Text fontScale={fontScale}>
          Logo em 1 ano já vemos uma diferença entre a poupança e um CDB.
          {"\n\n"}
          Porém, a diferença aumenta quanto mais tempo passamos!
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
