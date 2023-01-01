import React from "react";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons"; 
import { NavigationContext } from "@react-navigation/native";

import { Container, ContainerOptions } from "./styled";

interface MenuProps {
  currentScreen: string;
}

export function Menu({ currentScreen }: MenuProps) {
  const navigation = React.useContext(NavigationContext);

  const isHomeScreen = currentScreen === "home-screen";
  const isStoreCashyCoinsScreen = currentScreen === "store-cashy-coins-screen";

  function navigateToDashboard() {
    if (isHomeScreen) return;

    navigation.navigate("Dashboard", {});
  }

  function navigateToStore() {
    if (isStoreCashyCoinsScreen) return;

    // navigation.navigate("Store", {});
  }

  return (
    <Container>
      <ContainerOptions>
        <Pressable onPress={navigateToDashboard}>
          <Feather name="book-open" size={32} color={isHomeScreen ? "#00FF87" : "white"} />
        </Pressable>

        <Pressable onPress={navigateToStore}>
          <Feather name="award" size={32} color={isStoreCashyCoinsScreen ? "#00FF87" : "white"}  />
        </Pressable>
      </ContainerOptions>
    </Container>
  );
}