import React from "react";
import { StatusBar } from "react-native";

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
  const { user } = React.useContext<IValueAccessContext>(AccessContext);

  const totalLessonsAvaible = user?.lessonsCode?.length || 0;
  const totalLessonsCompleted = user?.lessonsCompleted?.length  || 0;

  const progressProfile = ((100 * totalLessonsCompleted) / totalLessonsAvaible) / 100;

  return (
    <Container>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1E1E1E"
        />

        <HeaderDashboard />

        <ContainerTitle>
          <Title>
            {user?.firstname}, o que {"\n"}
            vamos <TitleSpan>aprender hoje</TitleSpan>?
          </Title>
        </ContainerTitle>

        <ContainerSubtitle>
          <Subtitle>
            Continue de <SubtitleBold>onde</SubtitleBold> {"\n"}
            <SubtitleBold>você</SubtitleBold> parou.
          </Subtitle>
        </ContainerSubtitle>

        <LessonList />

        <ContainerSubtitle>
          <Subtitle>
            Confira seu <SubtitleBold>progresso</SubtitleBold>.
          </Subtitle>
        </ContainerSubtitle>

        <CardProgress progress={progressProfile} />

        <ContainerSubtitle>
          <Subtitle>
            Suas <SubtitleBold>CashyCoins</SubtitleBold>.
          </Subtitle>
        </ContainerSubtitle>

        <CardCashyCoins cashyCoins={user?.cashyCoins || 1000000} />
      </ScrollView>

      <Menu currentScreen="home-screen" />
    </Container>
  );
}