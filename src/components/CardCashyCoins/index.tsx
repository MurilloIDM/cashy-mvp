import { useWindowDimensions } from "react-native";
import { currencyFormatter } from "../../utils/formatCurrency";
import { Container, Image, Text, TextContainer, Title } from "./styled";

interface CardCashyCoinsProps {
  cashyCoins: number;
}

export function CardCashyCoins({ cashyCoins }: CardCashyCoinsProps) {
  const { fontScale } = useWindowDimensions();
  const formatCashyCoins = currencyFormatter(cashyCoins);

  return (
    <Container>
      <TextContainer>
        <Title fontScale={fontScale}>
          Atualmente {"\n"}
          você tem:
        </Title>

        <Text fontScale={fontScale}>C{formatCashyCoins}</Text>
      </TextContainer>

      <Image source={require("../../../assets/logo-cashycoins.png")} resizeMode="contain" />
    </Container>
  );
}