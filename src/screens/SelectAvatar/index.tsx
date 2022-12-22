import React from "react";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";

import { Button } from "../../components/Button";
import { AvatarList } from "../../components/AvatarList";

import {
  Container,
  ContainerBackground,
  ContainerContent,
  ContainerInfosUser,
  ImageBackground,
  ImageLogo,
  Span,
  Subtitle,
  TextButton,
  Title
} from "./styled";

export function SelectAvatarScreen({ navigation }) {
  const [firstname, setFirstname] = React.useState("");
  const [imageSelected, setImageSelected] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const fullName = await SecureStore.getItemAsync("fullname");

      if (!fullName) {
        navigation.navigate("Login");
      }

      const unformattedFirstname = fullName?.split(" ")?.[0];
      const formattedFirstname = unformattedFirstname?.[0]?.toUpperCase() + unformattedFirstname?.substring(1);

      setFirstname(formattedFirstname);
    })();
  }, []);

  function handleClickImage(imageId: number) {
    setImageSelected(imageId);
  }

  async function onSubmit() {
    await SecureStore.setItemAsync("avatarId", String(imageSelected));
    navigation.navigate("Tutorial");
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#EEE"
      />

      <ContainerBackground>
        <ImageLogo source={require("../../../assets/logo-clara.png")} />

        <ImageBackground
          source={require("../../../assets/select-avatar.png")}
        />

        <ContainerInfosUser>
          <Title>{firstname}</Title>

          <Subtitle>Clique e escolha seu <Span>Avatar</Span></Subtitle>
        </ContainerInfosUser>
      </ContainerBackground>


      <ContainerContent>
        <AvatarList
          imageSelected={imageSelected}
          handleClickImage={handleClickImage}
        />

        <Button
          onPress={onSubmit}
          backgroundColor="#00FF87"
          disabled={!(!!imageSelected)}
        >
          <TextButton>Continuar</TextButton>
        </Button>
      </ContainerContent>
    </Container>
  );
}