import { currencyFormatter } from "../../utils/formatCurrency";
import { Container, Image, Text, TextContainer, Title } from "./styled";

interface CardCashyCoinsProps {
  cashyCoins: number;
}

export function CardCashyCoins({ cashyCoins }: CardCashyCoinsProps) {
  const formatCashyCoins = currencyFormatter(cashyCoins);

  return (
    <Container>
      <TextContainer>
        <Title>
          Atualmente {"\n"}
          você tem:
        </Title>

        <Text>C{formatCashyCoins}</Text>
      </TextContainer>

      <Image source={require("../../../assets/logo-cashycoins.png")} resizeMode="contain" />
    </Container>
  );
}