import React from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../../../components/Button";
import { AccessContext, IValueAccessContext } from "../../../../context/AccessContext";

import { TutorialContext } from "../../../../context/TutorialContext";

import {
  ContainerButton,
  ContainerButtons,
  ContainerSimple,
  ContainerText,
  TextButton,
  Title,
  TitleGreen
} from "../../styled";

export function StepOne() {
  const { fontScale } = useWindowDimensions();
  const { setCurrentStep } = React.useContext(TutorialContext);
  const { user } = React.useContext<IValueAccessContext>(AccessContext);  

  function handleClickSkip() {
    setCurrentStep("step-five");
  }

  function handleClickStart() {
    setCurrentStep("step-two");
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Title fontScale={fontScale}>
          Bem vindo, <TitleGreen fontScale={fontScale}>{user?.firstname}</TitleGreen>!
        </Title>

        <Title fontScale={fontScale}>Vamos fazer um tour pela Cashy?</Title>
      </ContainerText>

      <ContainerButtons>
        <ContainerButton>
          <Button borderColor="#DB385A" onPress={handleClickSkip}>
            <TextButton
              colorName="red"
              fontScale={fontScale}
            >
              Pular
            </TextButton>
          </Button>
        </ContainerButton>

        <ContainerButton>
          <Button onPress={handleClickStart}>
            <TextButton
              colorName="green"
              fontScale={fontScale}
            >
              Vamos!
            </TextButton>
          </Button>
        </ContainerButton>
      </ContainerButtons>

    </ContainerSimple>
  );
}
