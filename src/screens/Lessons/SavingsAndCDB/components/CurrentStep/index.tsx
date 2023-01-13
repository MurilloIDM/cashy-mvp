import { useContext } from "react";


import { ILesson, LessonContext } from "../../../../../context/LessonContext";
import { StepEight } from "../StepEight";
import { StepEleven } from "../StepEleven";
import { StepFive } from "../StepFive";
import { StepFour } from "../StepFour";
import { StepNine } from "../StepNine";
import { StepOne } from "../StepOne";
import { StepSeven } from "../StepSeven";
import { StepSix } from "../StepSix";
import { StepTen } from "../StepTen";
import { StepThirteen } from "../StepThirteen";
import { StepThree } from "../StepThree";
import { StepTwelve } from "../StepTwelve";
import { StepTwo } from "../StepTwo";

export function CurrentStep() {
  const { currentStep } = useContext<ILesson>(LessonContext);

  const steps = {
    "step-one": StepOne,
    "step-two": StepTwo,
    "step-three": StepThree,
    "step-four": StepFour,
    "step-five": StepFive,
    "step-six": StepSix,
    "step-seven": StepSeven,
    "step-eight": StepEight,
    "step-nine": StepNine,
    "step-ten": StepTen,
    "step-eleven": StepEleven,
    "step-twelve": StepTwelve,
    "step-thirteen": StepThirteen
  };

  const Component = steps[currentStep];

  return <Component />;
}