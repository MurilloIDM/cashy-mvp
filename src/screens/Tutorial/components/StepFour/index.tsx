import { useContext } from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../../../components/Button";

import { TutorialContext } from "../../../../context/TutorialContext";

import {
  ContainerButton,
  ContainerButtons,
  ContainerSimple,
  ContainerText,
  Span,
  Subtitle,
  TextButton,
} from "../../styled";

export function StepFour() {
  const { fontScale } = useWindowDimensions();
  const { setCurrentStep } = useContext(TutorialContext);

  function handleClickBack() {
    setCurrentStep("step-three");
  }

  function handleClickNext() {
    setCurrentStep("step-five");
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle fontScale={fontScale}>
          Você consegue CashyCoins através das nossas lições que são disponibilizadas em cada palestra.
        </Subtitle>
      </ContainerText>

      <ContainerButtons>
        <ContainerButton>
          <Button borderColor="#DB385A" onPress={handleClickBack}>
            <TextButton
              colorName="red"
              fontScale={fontScale}
            >
              Voltar
            </TextButton>
          </Button>
        </ContainerButton>

        <ContainerButton>
          <Button onPress={handleClickNext}>
            <TextButton
              colorName="green"
              fontScale={fontScale}
            >
              Seguir
            </TextButton>
          </Button>
        </ContainerButton>
      </ContainerButtons>

    </ContainerSimple>
  );
}
