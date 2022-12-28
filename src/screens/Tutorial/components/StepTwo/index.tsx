import { useContext } from "react";

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
        <Subtitle>
          A Cashy trabalha com o sistema próprio
          <Span> play to L(earn)</Span>.
        </Subtitle>

        <Subtitle>
          Ao mesmo tempo que você aprende com as nossas palestras e lições você pode ganhar
          <Span> recompensas</Span>!
        </Subtitle>
      </ContainerText>

      <ContainerButtons>
        <ContainerButton>
          <Button borderColor="#DB385A" onPress={handleClickBack}>
            <TextButton colorName="red">
              Voltar
            </TextButton>
          </Button>
        </ContainerButton>

        <ContainerButton>
          <Button onPress={handleClickNext}>
            <TextButton colorName="green">
              Seguir
            </TextButton>
          </Button>
        </ContainerButton>
      </ContainerButtons>

    </ContainerSimple>
  );
}
