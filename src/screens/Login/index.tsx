import React from "react";
import * as SecureStore from "expo-secure-store";
import { KeyboardAvoidingView, LayoutChangeEvent, StatusBar } from "react-native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SocialLink } from "../../components/SocialLink";

import {
  ContainerContent,
  ContainerScroll,
  ContainerSocialLinks,
  FormContainer,
  ImageLogo,
  ImageMain,
  Span,
  Subtitle,
  TextButton,
  Title
} from "./styled";
import { useName } from "../../hooks/useName";

const iconInstagram = require("../../../assets/icon_instagram.png");
const iconLinkedin = require("../../../assets/icon_linkedin.png");

export function LoginScreen({ navigation }) {
  const { name, setName, validateName } = useName("");
  const [viewImageMain, setViewImageMain] = React.useState(true);

  const disabledButton = validateName();
  
  async function onSubmit() {
    await SecureStore.setItemAsync("fullname", name);
    navigation.navigate("SelectAvatar");
  }

  function onLayoutContainer(event: LayoutChangeEvent): void {
    const { height } = event.nativeEvent.layout;
    setViewImageMain(height > 600);
  }

  return (
    <KeyboardAvoidingView behavior="height" enabled>
      <ContainerScroll
        onLayout={onLayoutContainer}
        contentContainerStyle={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#FBFBFB"
          />

          {viewImageMain && (<ImageMain source={require("../../../assets/logo-gif.gif")} />)}

          <ImageLogo source={require("../../../assets/logo.png")} />

          <ContainerContent hasImage={viewImageMain}>
            <Title>Vamos lá!</Title>

            <Subtitle>
              Insira seus dados para <Span>continuar</Span>
            </Subtitle>

            <FormContainer>
              <Input
                value={name}
                onChange={setName}
                placeholder="Nome completo"
              />

              <Button
                onPress={onSubmit}
                backgroundColor="#00FF87"
                disabled={disabledButton}
              >
                <TextButton>Acessar</TextButton>
              </Button>
            </FormContainer>

            <Span>Siga a Cashy</Span>

            <ContainerSocialLinks>
              <SocialLink
                pathImage={iconInstagram}
                url="https://www.instagram.com/finance.cashy/"
              />

              <SocialLink
                pathImage={iconLinkedin}
                url="https://www.linkedin.com/company/cashyfinance/"
              />
            </ContainerSocialLinks>
          </ContainerContent>
      </ContainerScroll>
    </KeyboardAvoidingView>
  );
}