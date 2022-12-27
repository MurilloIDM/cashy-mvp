import React from "react";
import { FlatList, Pressable } from "react-native";
import { ComponentProps } from "../../types/defaultPropsType";

import { Image } from "./styled";

interface AvatarListProps {
  imageSelected: number;
  handleClickImage: (imageId: number) => void;
}

export function AvatarList({ imageSelected, handleClickImage }: ComponentProps<AvatarListProps>) {
  const data = [
    {
      id: 1,
      image: require("../../../assets/avatar-small-1.png"),
    },
    {
      id: 2,
      image: require("../../../assets/avatar-small-2.png"),
    },
    {
      id: 3,
      image: require("../../../assets/avatar-small-3.png"),
    },
    {
      id: 4,
      image: require("../../../assets/avatar-small-4.png"),
    },
    {
      id: 5,
      image: require("../../../assets/avatar-small-5.png"),
    },
    {
      id: 6,
      image: require("../../../assets/avatar-small-6.png"),
    },
    {
      id: 7,
      image: require("../../../assets/avatar-small-7.png"),
    },
    {
      id: 8,
      image: require("../../../assets/avatar-small-8.png"),
    },
    {
      id: 9,
      image: require("../../../assets/avatar-small-9.png"),
    },
  ];

  return (
    <FlatList
      data={data}
      horizontal
      snapToInterval={200}
      style={{
        width: "100%",
        maxHeight: 250,
        marginBottom: 32
      }}
      decelerationRate="fast"
      scrollEventThrottle={16}
      snapToAlignment={"center"}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item?.id)}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleClickImage(item?.id)}>
          <Image
            source={item?.image}
            style={{ resizeMode: "contain" }}
            isSelected={imageSelected === item?.id}
          />
        </Pressable>
      )}
    />
  );
}