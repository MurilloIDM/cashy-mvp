import React from "react";
import { Pressable } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";

import { AccessContext, IValueAccessContext } from "../../../context/AccessContext";

import { Card, CardBlocked, CardCompleted, ContainerText, Image, Text, Title } from "../styled";

export function CardList({ item }) {
  const { user } = React.useContext<IValueAccessContext>(AccessContext);

  const userLessons = user?.lessonsCode || [];
  const userLessonsCompleted = user?.lessonsCompleted || [];

  const isBlocked = !userLessons.some((lessonCode) => lessonCode === item?.code);
  const isCompleted = userLessonsCompleted.some((lessonCode) => lessonCode === item?.code);

  function handleOpenLesson() {
    if (isBlocked || isCompleted) return;

    // TODO: Implementar redirecionamento correto para as telas.
    console.log("Navegar para a tela " + item?.code);
  }

  return (
    <Pressable onPress={handleOpenLesson}>
      <Card>
        <ContainerText>
          <Title>{item?.title}</Title>

          <Text>{item?.description}</Text>
        </ContainerText>

        <Image source={item?.imagePath} resizeMode="contain" />

        {isBlocked && (
          <CardBlocked>
            <AntDesign name="lock" size={64} color="white" />
          </CardBlocked>
        )}

        {isCompleted && (
          <CardCompleted>
            <Octicons name="check-circle" size={64} color="#00ff87" />
          </CardCompleted>
        )}
      </Card>
    </Pressable>
  );
}