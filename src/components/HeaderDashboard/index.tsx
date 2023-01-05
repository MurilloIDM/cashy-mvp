import React from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

import { Container, ContainerInfosUser, Image, Text } from "./styled";
import { NavigationContext } from "@react-navigation/native";

const AVATAR_LARGE = {
  "1": require("../../../assets/avatar-large-1.png"),
  "2": require("../../../assets/avatar-large-2.png"),
  "3": require("../../../assets/avatar-large-3.png"),
  "4": require("../../../assets/avatar-large-4.png"),
  "5": require("../../../assets/avatar-large-5.png"),
  "6": require("../../../assets/avatar-large-6.png"),
  "7": require("../../../assets/avatar-large-7.png"),
  "8": require("../../../assets/avatar-large-8.png"),
  "9": require("../../../assets/avatar-large-9.png"),
};

export function HeaderDashboard() {
  const navigation = React.useContext(NavigationContext);
  const { user } = React.useContext<IValueAccessContext>(AccessContext);
  
  return (
    <Container>
      <Pressable onPress={() => navigation.navigate("RegisterCodePrivate", {})}>
        <Feather name="plus-square" size={32} color="#00FF87" />
      </Pressable>

      <ContainerInfosUser>
        <View>
          <Text>Bem-vindo,</Text>
          <Text>{user?.firstname}</Text>
        </View>

        <Image source={AVATAR_LARGE[user?.avatarId]} resizeMode="cover" />
      </ContainerInfosUser>
    </Container>
  );
}