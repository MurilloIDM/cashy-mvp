import { LESSONS } from "../../global/mock/lessons";

import { Container, ContainerText, Image, Text, Title } from "./styled";

export function LessonCard({ lessonCode }) {
  const lesson = LESSONS.find((lesson) => lesson.code === lessonCode) || null;

  if (!lesson) return null; 

  return (
    <Container>
      <ContainerText>
        <Title>{lesson?.title}</Title>

        <Text>{lesson?.description}</Text>
      </ContainerText>

      <Image source={lesson?.imagePath} resizeMode="contain" />
    </Container>
  );
}