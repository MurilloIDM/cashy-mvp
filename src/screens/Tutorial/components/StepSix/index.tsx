import { Button } from "../../../../components/Button";

import {
  ContainerButtons,
  ContainerButtonUnique,
  ContainerSimple,
  ContainerText,
  Subtitle,
  TextButton,
} from "../../styled";

export function StepSix() {
  function handleClickConfirm() {
    console.log("Redirecionar para a tela de sucesso sem código.");
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle>
          Sem problemas! Nós deixamos uma lição de presente para você!
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
