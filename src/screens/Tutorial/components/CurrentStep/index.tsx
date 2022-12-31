import { useContext } from "react";

import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";
import { StepThree } from "../StepThree";
import { StepFour } from "../StepFour";
import { StepFive } from "../StepFive";
import { StepSix } from "../StepSix";
import { StepSeven } from "../StepSeven";

import { TutorialContext } from "../../../../context/TutorialContext";

export function CurrentStep() {
  const { currentStep } = useContext(TutorialContext);

  const steps = {
    "step-one": StepOne,
    "step-two": StepTwo,
    "step-three": StepThree,
    "step-four": StepFour,
    "step-five": StepFive,
    "step-six": StepSix,
    "step-seven": StepSeven
  };

  const Component = steps[currentStep];

  return <Component />;
}