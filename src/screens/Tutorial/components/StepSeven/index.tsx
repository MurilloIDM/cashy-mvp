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

export function StepSeven({ navigation }) {
  const { fontScale } = useWindowDimensions();

  function handleClickConfirm() {
    navigation.navigate("RegisterCode", { lessonCode: "" });
  }

  return (
    <ContainerSimple>
      <ContainerText>
        <Subtitle fontScale={fontScale}>
          Ótimo! Após inserir o código a lição será liberada e você poderá começar a aprender com a Cashy!
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
