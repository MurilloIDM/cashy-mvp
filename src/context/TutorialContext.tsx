import React from "react";

export const TutorialContext = React.createContext(null);

export function TutorialProvider({ children }) {
  const [currentStep, setCurrentStep] = React.useState("step-one");

  return (
    <TutorialContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </TutorialContext.Provider>
  );
}