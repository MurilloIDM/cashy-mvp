import { Button } from "../../../../components/Button";

import {
  ContainerButtons,
  ContainerButtonUnique,
  ContainerSimple,
  ContainerText,
  Subtitle,
  TextButton,
} from "../../styled";

export function StepSix({ navigation }) {
  function handleClickConfirm() {
    navigation.navigate("RegisterCode", { lessonCode: "697-796" });
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
