import React from "react";
import { KeyboardAvoidingView, LayoutChangeEvent, StatusBar, useWindowDimensions } from "react-native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SocialLink } from "../../components/SocialLink";

import { User } from "../../utils/user";
import { useName } from "../../hooks/useName";
import { getFirstname } from "../../utils/getFirstname";
import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

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

const iconTiktok = require("../../../assets/tiktok.png");
const iconLinkedin = require("../../../assets/icon_linkedin.png");
const iconInstagram = require("../../../assets/icon_instagram.png");

export function LoginScreen() {
  const { fontScale } = useWindowDimensions();
  const { user, updateValueUser } = React.useContext<IValueAccessContext>(AccessContext);

  const { name, setName, validateName } = useName("");
  const [viewImageMain, setViewImageMain] = React.useState(true);

  const disabledButton = validateName();
  
  async function onSubmit() {
    const fullname = name;
    const firstname = getFirstname(fullname);

    await User.setUser({ ...user, fullname, firstname });
    await updateValueUser();
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
            <Title fontScale={fontScale}>Vamos lá!</Title>

            <Subtitle fontScale={fontScale}>
              Insira seus dados para <Span fontScale={fontScale}>continuar</Span>
            </Subtitle>

            <FormContainer>
              <Input
                value={name}
                onChange={setName}
                placeholder="Nome completo"
                autoCapitalize="words"
              />

              {viewImageMain && (
                <Button
                  onPress={onSubmit}
                  backgroundColor="#00FF87"
                  disabled={disabledButton}
                >
                  <TextButton fontScale={fontScale}>Acessar</TextButton>
                </Button>
              )}
            </FormContainer>

            <Span fontScale={fontScale}>Siga a Cashy</Span>

            <ContainerSocialLinks>
              <SocialLink
                pathImage={iconInstagram}
                url="https://www.instagram.com/cashy.finance/"
              />

              <SocialLink
                pathImage={iconLinkedin}
                url="https://www.linkedin.com/company/cashyfinance/"
              />

              <SocialLink
                pathImage={iconTiktok}
                url="https://www.tiktok.com/@finance.cashy?lang=pt-BR"
              />
            </ContainerSocialLinks>
          </ContainerContent>
      </ContainerScroll>
    </KeyboardAvoidingView>
  );
}