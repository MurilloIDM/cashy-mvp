import React from "react";

export const LessonContext = React.createContext(null);

export interface ILesson {
  progress: number;
  currentStep: string;
  updateProgress: (totalSteps: number, totalStepsCompleted: number) => void;
  updateCurrentStep: (newStep: string) => void;
}

export function LessonProvider({ children }) {
  const [progress, setProgress] = React.useState<number>(0);
  const [currentStep, setCurrentStep] = React.useState<string>("step-one");

  function updateProgress(totalSteps: number, totalStepsCompleted: number): void {
    setProgress(((100 * totalStepsCompleted) / totalSteps) / 100);
  }

  function updateCurrentStep(newStep: string): void {
    setCurrentStep(newStep);
  }

  return (
    <LessonContext.Provider value={{
      progress,
      currentStep,
      updateProgress,
      updateCurrentStep,
    }}>
      {children}
    </LessonContext.Provider>
  );
}