import React from "react";
import { useWindowDimensions } from "react-native";
import { NavigationContext } from "@react-navigation/native";

import { Button } from "../../../../../components/Button";
import { ProgressBar } from "../../../../../components/ProgressBar";

import { ILesson, LessonContext } from "../../../../../context/LessonContext";
import { AccessContext, IValueAccessContext } from "../../../../../context/AccessContext";

import { User } from "../../../../../utils/user";

import { 
  ContainerButtonUnique,
  Footer,
  ImageLogoFull,
  Subtitle,
  SubtitleGreen,
  TextButton,
  Title
} from "../../styled";

export function StepSix() {
  const { fontScale } = useWindowDimensions();
  const navigation = React.useContext(NavigationContext);
  const { progress } = React.useContext<ILesson>(LessonContext);
  const { user, updateValueUser } = React.useContext<IValueAccessContext>(AccessContext);

  async function handleClickFinish() {
    const cashyCoins = user?.cashyCoins + 250000;
    await User.setUser({ ...user, cashyCoins, lessonsCompleted: [...user?.lessonsCompleted, "697-796"]});
    updateValueUser();

    navigation.navigate("Dashboard");
  }

  return (
    <>
      <ImageLogoFull source={require("../../../../../../assets/logo-baixo.png")} />

      <Title fontScale={fontScale}>Missão completa!</Title>
      <Subtitle fontScale={fontScale}>
        Parabéns! {"\n"} Você recebeu {"\n"}
      </Subtitle>

      <SubtitleGreen fontScale={fontScale}>C$250.000,00</SubtitleGreen>

      <Footer>
        <ContainerButtonUnique>
          <Button backgroundColor="#00FF87" onPress={handleClickFinish}>
              <TextButton
                colorName="white"
                fontScale={fontScale}
              >
                Finalizar
              </TextButton>
            </Button>
        </ContainerButtonUnique>

        <ProgressBar progress={progress} />
      </Footer>
    </>
  );
}
