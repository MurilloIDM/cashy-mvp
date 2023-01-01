import { FlatList, View } from "react-native";

import { CardList } from "./components/Card";

import { LESSONS } from "../../global/mock/lessons";

const containerListStyle = {
  width: "100%",
  maxHeight: 205,
  paddingLeft: 12,
  paddingRight: 36,
};

const footerListStyle = {
  paddingRight: 24,
};

export function LessonList() {
  return (
    <FlatList
      horizontal
      data={LESSONS}
      decelerationRate="fast"
      snapToAlignment="center"
      style={containerListStyle}
      showsHorizontalScrollIndicator={false}
      ListFooterComponentStyle={footerListStyle}
      ListFooterComponent={<View></View>}
      keyExtractor={(item) => item?.code}
      renderItem={({ item }) => (<CardList item={item} />)}
    />
  );
}