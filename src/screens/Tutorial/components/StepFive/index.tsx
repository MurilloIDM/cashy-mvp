import { useContext } from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../../../components/Button";

import { TutorialContext } from "../../../../context/TutorialContext";

import {
  ContainerButton,
  ContainerButtons,
  ContainerSimple,
  ContainerText,
  Subtitle,
  TextButton,
} from "../../styled";

export function StepFive() {
  const { fontScale } = useWindowDimensions();
  const { setCurrentStep } = useContext(TutorialContext);

  function handleClickNo() {
    setCurrentStep("step-six");
  }

  function handleClickYes() {
    setCurrentStep("step-seven");
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle fontScale={fontScale}>
          Você tem um código de uma lição?
        </Subtitle>
      </ContainerText>

      <ContainerButtons>
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
      </ContainerButtons>

    </ContainerSimple>
  );
}
