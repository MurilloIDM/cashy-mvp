import { useContext } from "react";
import { useWindowDimensions } from "react-native";

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
  const { fontScale } = useWindowDimensions();
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
        <Subtitle fontScale={fontScale}>
          Através das 
          <Span fontScale={fontScale}> CashyCoins </Span>
          você pode juntar e adquirir seu certificado Cashy, bottoms e outros!
        </Subtitle>

        <ImageCashyCoins source={require("../../../../../assets/tutorial-cashycoins.png")} />


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
