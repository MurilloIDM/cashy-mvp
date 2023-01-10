import { useWindowDimensions } from "react-native";
import { Container, TextGreen, TextWhite } from "./styled";

interface LessonHeaderProps {
  textStartWhite: string;
  textMiddleGreen: string;
  textEndWhite?: string;
}

export function LessonHeader({
  textStartWhite,
  textMiddleGreen,
  textEndWhite
}: LessonHeaderProps) {
  const { fontScale } = useWindowDimensions();

  return (
    <Container>
      <TextWhite fontScale={fontScale} textAlign="left">
        {textStartWhite + "\n"}
        <TextGreen fontScale={fontScale} textAlign="left">{textMiddleGreen}</TextGreen>
        {textEndWhite}
      </TextWhite>

      <TextWhite fontScale={fontScale} textAlign="right">
        {"Lição\n"}
        <TextGreen fontScale={fontScale} textAlign="right">Básico</TextGreen>
      </TextWhite>
    </Container>
  );
}