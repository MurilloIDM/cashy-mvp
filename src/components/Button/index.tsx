import { PressableStateCallbackType, StyleProp } from "react-native";

import { styles } from "./styles";
import { ButtonPressable } from "./styled";

import { ComponentProps } from "../../types/defaultPropsType";

export interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  borderColor?: string;
  backgroundColor?: string;
}

export function Button({
  children,
  onPress,
  disabled,
  borderColor,
  backgroundColor
}: ComponentProps<ButtonProps>) {
  function stylesAction({ pressed }: PressableStateCallbackType): StyleProp<any>[] {
    return [
      pressed ? styles.backgroundOnClick : {},
      disabled ? styles.disabled : {}
    ];
  }

  return (
    <ButtonPressable
      onPress={onPress}
      disabled={disabled}
      style={stylesAction}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonPressable>
  );
}