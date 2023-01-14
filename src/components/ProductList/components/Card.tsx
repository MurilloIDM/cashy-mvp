import React from "react";
import { useWindowDimensions } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { NavigationContext } from "@react-navigation/native";

import { Button } from "../../Button";

import { currencyFormatter } from "../../../utils/formatCurrency";
import { AccessContext, IValueAccessContext } from "../../../context/AccessContext";

import {
  Card,
  CardBlocked,
  CardCompleted,
  ContainerText,
  Image,
  Text,
  TextButton,
  Title,
  TitleGreen
} from "../styled";

export function CardList({ item }) {
  const { fontScale } = useWindowDimensions();
  const navigation = React.useContext(NavigationContext);
  const { user } = React.useContext<IValueAccessContext>(AccessContext);

  const purchasedProducts = user?.purchasedProducts || [];
  const haveCashyCoins = user?.cashyCoins >= item?.value;

  const isCompleted = purchasedProducts.some((productCode) => productCode === item?.code);
  const isBlocked = !isCompleted && !(haveCashyCoins && item?.status);

  function handleOpenLesson(productCode: string) {
    if (isBlocked || isCompleted) return;

    navigation.navigate("ProductConfirm", { productCode });
  }

  return (
    <Card>
      <ContainerText>
        <Title fontScale={fontScale}>{item?.name}</Title>

        <TitleGreen fontScale={fontScale}>
          C{currencyFormatter(item?.value)}
        </TitleGreen>

        <Text fontScale={fontScale}>{item?.description}</Text>

        <Button backgroundColor="#00FF87" onPress={() => handleOpenLesson(item?.code)}>
          <TextButton fontScale={fontScale}>
            Resgatar
          </TextButton>
        </Button>
      </ContainerText>

      <Image source={item?.image} resizeMode="contain" />

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
  );
}