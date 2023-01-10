import React from "react";
import { Alert, StatusBar } from "react-native";

import { LessonHeader } from "../../../components/LessonHeader";

import { LessonProvider } from "../../../context/LessonContext";
import { CurrentStep } from "./components/CurrentStep";

import { Container, ContainerIn } from "./styled";

export function InvestTodayScreen({ navigation }) {
  const [wantToComeBack, setWantToComeBack] = React.useState<boolean>(false);

  function handleToComeBack() {
    setWantToComeBack(true);
  }
  
  React.useEffect(() => {
    navigation.addListener("beforeRemove", (event: any) => {
      if (event?.data?.action?.type !== "GO_BACK") return;

      event.preventDefault();

      Alert.alert(
        "Todo seu progresso será perdido!",
        "Você realmente deseja sair?",
        [
          {
            text: "Cancelar",
            style: "cancel",
            onPress: () => {},
          },
          {
            text: "Sair da lição",
            style: "destructive",
            onPress: () => navigation.dispatch(event.data.action),
          },
        ],
        {
          
        }
      );
    });

  }, [navigation, wantToComeBack]);

  return (
    <LessonProvider>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1E1E1E"
        />

        <ContainerIn>
          <LessonHeader
            textStartWhite="Invista"
            textMiddleGreen="Hoje"
          />

          <CurrentStep />
        </ContainerIn>

      </Container>
    </LessonProvider>
  );
}