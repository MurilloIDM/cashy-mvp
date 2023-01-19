import React from "react";
import { LayoutChangeEvent, StatusBar, useWindowDimensions } from "react-native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { LessonCard } from "../../components/LessonCard";

import { LESSONS } from "../../global/mock/lessons";

import { User } from "../../utils/user";
import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

import {
  ButtonContainer,
  CardContainer,
  Container,
  Form,
  FormContent,
  Image, 
  TextButton,
  TextError,
  Title,
  TitleGreen
} from "./styled";

export function RegisterCodeScreen({ navigation, route }) {
  const { lessonCode } = route.params;
  const { height: heightScreen, fontScale } = useWindowDimensions();

  const { user, updateValueUser } = React.useContext<IValueAccessContext>(AccessContext);

  const [error, setError] = React.useState(false);
  const [code, setCode] = React.useState(lessonCode || "");
  const [validCode, setValidCode] = React.useState(!!lessonCode);
  const [heightContainerContent, setHeightContainerContent] = React.useState(null);

  function onLayoutContainer(event: LayoutChangeEvent): void {
    const { height } = event.nativeEvent.layout;

    const percentege = (height * 100) / heightScreen;
    setHeightContainerContent(percentege);
  }

  const hasCode = !!code;

  function onSumit() {
    const lesson = LESSONS.find((lesson) => lesson?.code === code) || null;
    
    setValidCode(!!lesson);
    setError(!!lesson === false);
  }

  async function handleClose() {
    const hasLesson = user?.lessonsCode?.find((lessonCode) => lessonCode === code) || null;

    if (hasLesson === null) {
      await User.setUser({ ...user, lessonsCode: [...user?.lessonsCode, code]});
    }

    await updateValueUser();
    navigation.navigate("Dashboard");
  }
  
  return (
    <Container onLayout={onLayoutContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1E1E1E"
      />

      <Image source={require("../../../assets/logo-baixo-cortada.png")} />

      {!validCode ? (
        <>
          <Title fontScale={fontScale}>
            Insira abaixo seu <TitleGreen fontScale={fontScale}>código</TitleGreen>
          </Title>

          <Form>
            <FormContent>
              <Input
                value={code}
                type="numeric"
                color="white"
                placeholder="XXX-XXX"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                onChange={(newValue: string) => setCode(newValue)}
                mask={[/[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/]}
              />

              {error && (
                <TextError fontScale={fontScale}>Informe um código de uma lição válida!</TextError>
              )}
            </FormContent>
          </Form>

          {heightContainerContent >= 95 && (
            <ButtonContainer>
              <Button
                onPress={onSumit}
                disabled={!(!!hasCode)}
                backgroundColor="#00FF87"
              >
                <TextButton fontScale={fontScale}>
                  Confirmar
                </TextButton>
              </Button>
            </ButtonContainer>
          )}
        </>
      ) : (
        <>
          <Title fontScale={fontScale}>
            Lição <TitleGreen fontScale={fontScale}>liberada</TitleGreen>!
          </Title>

          <Form>
            <CardContainer>
              <LessonCard lessonCode={code} />
            </CardContainer>
          </Form>

          <ButtonContainer>
            <Button
              onPress={handleClose}
              backgroundColor="#00FF87"
            >
              <TextButton fontScale={fontScale}>
                Concluir cadastro
              </TextButton>
            </Button>
          </ButtonContainer>
        </>
      )}


    </Container>
  );
}