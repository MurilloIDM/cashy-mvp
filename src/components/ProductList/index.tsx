import { FlatList, View } from "react-native";

import { CardList } from "./components/Card";

import { PRODUCTS } from "../../global/mock/products";

const footerListStyle = {
  paddingRight: 24,
};

export function ProductList() {
  return (
    <FlatList
      data={PRODUCTS}
      decelerationRate="fast"
      snapToAlignment="center"
      ListFooterComponent={<View></View>}
      keyExtractor={(item) => item?.code}
      showsVerticalScrollIndicator={false}
      ListFooterComponentStyle={footerListStyle}
      style={{ width: "90%", alignSelf: "center" }}
      renderItem={({ item }) => (<CardList item={item} />)}
    />
  );
}