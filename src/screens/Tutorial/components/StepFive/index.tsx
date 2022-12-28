import { useContext } from "react";

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
        <Subtitle>
          Você tem um código de uma lição?
        </Subtitle>
      </ContainerText>

      <ContainerButtons>
        <ContainerButton>
          <Button borderColor="#DB385A" onPress={handleClickNo}>
            <TextButton colorName="red">
              Não
            </TextButton>
          </Button>
        </ContainerButton>

        <ContainerButton>
          <Button onPress={handleClickYes}>
            <TextButton colorName="green">
              Sim
            </TextButton>
          </Button>
        </ContainerButton>
      </ContainerButtons>

    </ContainerSimple>
  );
}
