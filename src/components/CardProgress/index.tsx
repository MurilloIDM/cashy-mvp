import { Circle, ContainerIn, ContainerOut, ImageLeft, ImageRight, Text, Title } from "./styled";

interface CardProgressProps {
  progress: number;
}

export function CardProgress({ progress }: CardProgressProps) {
  return (
    <ContainerOut>
      <Circle
        size={210}
        thickness={30}
        progress={progress}
        borderWidth={0.7}
        borderColor="rgba(242, 242, 242, 0.15)"
        showsText={true}
        fill="#EEEEEE"
        strokeCap="round"
        color="#00FF87"
        unfilledColor="#EEEEEE"
        allowFontScaling={false}
        textStyle={{ fontFamily: "Gotham-Black-Regular" }}
      />

      <ImageLeft source={require("../../../assets/progress-left.png")} />
      <ImageRight source={require("../../../assets/progress-right.png")} />

      <ContainerIn>
        <Title>Básico</Title>


        <Text>
          Apredendo sobre Renda fixa {"\n"}
          CDB, LCI, Poupança e mais...
        </Text>
      </ContainerIn>

    </ContainerOut>
  );
}