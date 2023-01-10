import { useContext } from "react";

import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";
import { StepThree } from "../StepThree";
import { StepFour } from "../StepFour";
import { StepFive } from "../StepFive";
import { StepSix } from "../StepSix";

import { ILesson, LessonContext } from "../../../../../context/LessonContext";

export function CurrentStep() {
  const { currentStep } = useContext<ILesson>(LessonContext);

  const steps = {
    "step-one": StepOne,
    "step-two": StepTwo,
    "step-three": StepThree,
    "step-four": StepFour,
    "step-five": StepFive,
    "step-six": StepSix,
  };

  const Component = steps[currentStep];

  return <Component />;
}