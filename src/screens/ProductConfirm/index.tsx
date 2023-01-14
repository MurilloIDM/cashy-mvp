import React from "react";
import { Linking, StatusBar, useWindowDimensions } from "react-native";
import { Button } from "../../components/Button";

import { PRODUCTS } from "../../global/mock/products";

import { currencyFormatter } from "../../utils/formatCurrency";
import { AccessContext, IValueAccessContext } from "../../context/AccessContext";

import {
  Container,
  ContainerButton,
  ContainerButtons,
  Image,
  ImageLogo,
  Subtitle,
  SubtitleGreen,
  TextButton,
  Title,
  TitleGreen
} from "./styled";
import { User } from "../../utils/user";

export function ProductConfirmScreen({ navigation, route }) {
  const { productCode } = route.params;

  const { fontScale } = useWindowDimensions();
  const { user, updateValueUser } = React.useContext<IValueAccessContext>(AccessContext);

  const product = PRODUCTS.find((product) => product?.code === productCode);

  function handleClickBack() {
    navigation.navigate("Store");
  }

  function handleClickNext() {
    const cashyCoins = user?.cashyCoins - product?.value;

    User.setUser({ ...user, cashyCoins, purchasedProducts: [...user?.purchasedProducts, productCode] });
    updateValueUser();


    navigation.navigate("Dashboard");
    Linking.openURL("https://wa.me/5534997977322?text=Quero+obter+o+meu+certificado+da+Cashy%21");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1E1E1E"
      />

      <ImageLogo source={require("../../../assets/logo-baixo-cortada.png")} />

      <Title fontScale={fontScale}>
        Tem certeza que quer resgatar: 
      </Title>

      <TitleGreen fontScale={fontScale}>
        {product?.name}
      </TitleGreen>

      <Image source={product?.image} />

      <Subtitle fontScale={fontScale}>
        Valor: C{currencyFormatter(product?.value)} {"\n"}
        CashyCoins: <SubtitleGreen fontScale={fontScale}>C{currencyFormatter(user?.cashyCoins)}</SubtitleGreen>
      </Subtitle>

      <ContainerButtons>
      <ContainerButton>
          <Button onPress={handleClickNext}>
            <TextButton
              colorName="green"
              fontScale={fontScale}
            >
              Sim
            </TextButton>
          </Button>
        </ContainerButton>
        
        <ContainerButton>
          <Button borderColor="#DB385A" onPress={handleClickBack}>
            <TextButton
              colorName="red"
              fontScale={fontScale}
            >
              Não
            </TextButton>
          </Button>
        </ContainerButton>
      </ContainerButtons>
    </Container>
  );
}