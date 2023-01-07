import { useWindowDimensions } from "react-native";
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
  const { fontScale } = useWindowDimensions();

  function handleClickConfirm() {
    navigation.navigate("RegisterCode", { lessonCode: "697-796" });
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle fontScale={fontScale}>
          Sem problemas! Nós deixamos uma lição de presente para você!
        </Subtitle>
      </ContainerText>

      <ContainerButtons>
        <ContainerButtonUnique>
          <Button onPress={handleClickConfirm}>
            <TextButton
              colorName="green"
              fontScale={fontScale}
            >
              Continuar
            </TextButton>
          </Button>
        </ContainerButtonUnique>
      </ContainerButtons>

    </ContainerSimple>
  );
}
