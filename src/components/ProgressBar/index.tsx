import * as Progress from "react-native-progress"

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <Progress.Bar
      height={10}
      borderWidth={0}
      width={null}
      color="#00FF87"
      progress={progress}
      unfilledColor="#EEEEEE"
    />
  );
}