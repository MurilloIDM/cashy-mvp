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
  TextButton
} from "../../styled";

export function StepTwo() {
  const { fontScale } = useWindowDimensions();
  const { setCurrentStep } = useContext(TutorialContext);

  function handleClickBack() {
    setCurrentStep("step-one");
  }

  function handleClickNext() {
    setCurrentStep("step-three");
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle fontScale={fontScale}>
          A Cashy trabalha com o sistema próprio
          <Span fontScale={fontScale}> play to L(earn)</Span>.
        </Subtitle>

        <Subtitle fontScale={fontScale}>
          Ao mesmo tempo que você aprende com as nossas palestras e lições você pode ganhar
          <Span fontScale={fontScale}> recompensas</Span>!
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
