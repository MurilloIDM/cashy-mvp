import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import { Menu } from "../../components/Menu";
import { LessonList } from "../../components/LessonList";
import { CardProgress } from "../../components/CardProgress";
import { HeaderDashboard } from "../../components/HeaderDashboard";

import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

import {
  Container,
  ContainerSubtitle,
  ContainerTitle,
  ScrollView,
  Subtitle,
  SubtitleBold,
  Title,
  TitleSpan
} from "./styled";
import { CardCashyCoins } from "../../components/CardCashyCoins";

export function DashboardScreen() {
  const { fontScale } = useWindowDimensions();
  const [progress, setProgress] = React.useState<number>(0);
  const { user } = React.useContext<IValueAccessContext>(AccessContext);

  React.useEffect(() => {
    const totalLessonsAvaible = user?.lessonsCode?.length || 0;
    const totalLessonsCompleted = user?.lessonsCompleted?.length  || 0;

    const progressProfile = ((100 * totalLessonsCompleted) / totalLessonsAvaible) / 100;
    setProgress(progressProfile);
  }, [user]);

  return (
    <Container>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1E1E1E"
        />

        <HeaderDashboard />

        <ContainerTitle>
          <Title fontScale={fontScale}>
            {user?.firstname}, o que {"\n"}
            vamos <TitleSpan fontScale={fontScale}>aprender hoje</TitleSpan>?
          </Title>
        </ContainerTitle>

        <ContainerSubtitle>
          <Subtitle fontScale={fontScale}>
            Continue de <SubtitleBold fontScale={fontScale}>onde</SubtitleBold> {"\n"}
            <SubtitleBold fontScale={fontScale}>você</SubtitleBold> parou.
          </Subtitle>
        </ContainerSubtitle>

        <LessonList />

        <ContainerSubtitle>
          <Subtitle fontScale={fontScale}>
            Confira seu <SubtitleBold fontScale={fontScale}>progresso</SubtitleBold>.
          </Subtitle>
        </ContainerSubtitle>

        <CardProgress progress={progress} />

        <ContainerSubtitle>
          <Subtitle fontScale={fontScale}>
            Suas <SubtitleBold fontScale={fontScale}>CashyCoins</SubtitleBold>.
          </Subtitle>
        </ContainerSubtitle>

        <CardCashyCoins cashyCoins={user?.cashyCoins || 0} />
      </ScrollView>

      <Menu currentScreen="home-screen" />
    </Container>
  );
}