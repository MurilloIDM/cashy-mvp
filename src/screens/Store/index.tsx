import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import { Menu } from "../../components/Menu";
import { ProductList } from "../../components/ProductList";
import { HeaderDashboard } from "../../components/HeaderDashboard";

import { currencyFormatter } from "../../utils/formatCurrency";
import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

import {
  Container,
  ContainerSubtitle,
  ContainerTitle,
  Subtitle,
  SubtitleBold,
  Title,
  TitleSpan
} from "./styled";

export function StoreScreen() {
  const { fontScale } = useWindowDimensions();
  const { user } = React.useContext<IValueAccessContext>(AccessContext);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1E1E1E"
      />

      <HeaderDashboard />

      <ContainerTitle>
        <Title fontScale={fontScale}>
          {user?.firstname}, abaixo você {"\n"}
          pode ver as <TitleSpan fontScale={fontScale}>recompensas</TitleSpan> para
          <TitleSpan fontScale={fontScale}> regatar</TitleSpan>!
        </Title>
      </ContainerTitle>

      <ContainerSubtitle>
        <Subtitle fontScale={fontScale}>
          Suas CashyCoins:
          <SubtitleBold fontScale={fontScale}> C{currencyFormatter(user?.cashyCoins)}</SubtitleBold>
        </Subtitle>
      </ContainerSubtitle>

      <ProductList />

      <Menu currentScreen="store-screen" />
    </Container>
  );
}