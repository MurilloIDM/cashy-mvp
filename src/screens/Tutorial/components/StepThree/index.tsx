import { useContext } from "react";

import { Button } from "../../../../components/Button";

import { TutorialContext } from "../../../../context/TutorialContext";

import {
  ContainerButton,
  ContainerButtons,
  ContainerSimple,
  ContainerText,
  ImageCashyCoins,
  Span,
  Subtitle,
  TextButton,
} from "../../styled";

export function StepThree() {
  const { setCurrentStep } = useContext(TutorialContext);

  function handleClickBack() {
    setCurrentStep("step-two");
  }

  function handleClickNext() {
    setCurrentStep("step-four");
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle>
          Através das <Span>CashyCoins</Span> você pode juntar e adquirir seu certificado Cashy, bottoms e outros!
        </Subtitle>

        <ImageCashyCoins source={require("../../../../../assets/tutorial-cashycoins.png")} />


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
