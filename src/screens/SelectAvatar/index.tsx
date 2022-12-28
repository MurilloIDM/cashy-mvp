import React from "react";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";

import { Button } from "../../components/Button";
import { AvatarList } from "../../components/AvatarList";

import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

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
import { User } from "../../utils/user";

export function SelectAvatarScreen({ navigation }) {
  const { user, updateValueUser } = React.useContext<IValueAccessContext>(AccessContext);

  const [imageSelected, setImageSelected] = React.useState(null);

  function handleClickImage(imageId: number) {
    setImageSelected(imageId);
  }

  async function onSubmit() {
    const avatarId = String(imageSelected);

    await User.setUser({ ...user, avatarId });
    await updateValueUser();
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
          <Title>{user?.firstname}</Title>

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