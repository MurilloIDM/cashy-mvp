import { ImageSourcePropType, Linking, Pressable } from "react-native";
import { Image } from "./styled";

interface SocialLinkProps {
  pathImage: ImageSourcePropType;
  url: string;
}

export function SocialLink({ pathImage, url }: SocialLinkProps) {
  const toOpen = () => Linking.openURL(url);

  return (
    <Pressable onPress={toOpen}>
      <Image source={pathImage} />
    </Pressable>
  );
}
