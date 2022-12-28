import { Button } from "../../../../components/Button";

import {
  ContainerButtons,
  ContainerButtonUnique,
  ContainerSimple,
  ContainerText,
  Subtitle,
  TextButton,
} from "../../styled";

export function StepSeven() {
  function handleClickConfirm() {
    console.log("Redirecionar para a tela de de cadastro do código.");
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle>
          Ótimo! Após inserir o código a lição será liberada e você poderá começar a aprender com a Cashy!
        </Subtitle>
      </ContainerText>

      <ContainerButtons>
        <ContainerButtonUnique>
          <Button onPress={handleClickConfirm}>
            <TextButton colorName="green">
              Continuar
            </TextButton>
          </Button>
        </ContainerButtonUnique>
      </ContainerButtons>

    </ContainerSimple>
  );
}
