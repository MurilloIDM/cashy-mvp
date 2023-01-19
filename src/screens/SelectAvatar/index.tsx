import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import { Button } from "../../components/Button";
import { AvatarList } from "../../components/AvatarList";

import { User } from "../../utils/user";
import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

import {
  Container,
  ContainerBackground,
  ContainerContent,
  ContainerInfosUser,
  Description,
  ImageBackground,
  ImageLogo,
  Span,
  Subtitle,
  TextButton,
  Title
} from "./styled";

export function SelectAvatarScreen() {
  const { fontScale } = useWindowDimensions();
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
      </ContainerBackground>


      <ContainerContent>
        <ContainerInfosUser>
          <Title fontScale={fontScale}>{user?.firstname}</Title>

          <Subtitle fontScale={fontScale}>Clique e escolha seu <Span fontScale={fontScale}>Avatar</Span></Subtitle>

          <Description fontScale={fontScale}>Arraste para o lado para navegar entre as opções</Description>
        </ContainerInfosUser>

        <AvatarList
          imageSelected={imageSelected}
          handleClickImage={handleClickImage}
        />

        <Button
          onPress={onSubmit}
          backgroundColor="#00FF87"
          disabled={!(!!imageSelected)}
        >
          <TextButton fontScale={fontScale}>Continuar</TextButton>
        </Button>
      </ContainerContent>
    </Container>
  );
}