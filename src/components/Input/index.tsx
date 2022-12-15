import { ComponentProps } from "../../types/defaultPropsType";

import { Container, Label, TextInput, TextInputMask } from "./styled";

interface InputProps {
  type: string;
  mask: string;
  value: string;
  label: string;
  focus: boolean;
  required: boolean;
  placeholder: string;
}

export function Input (props: ComponentProps<InputProps>) {
  const { mask } = props;
  const Component = !!mask ? InputWithMask : InputWithoutMask;

  return <Component {...props} />;
}

const InputWithMask = ({
  type,
  mask,
  label,
  value,
  focus,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <Container>
      {!!label && (<Label>{label} {required && "*"}</Label>)}

      <TextInputMask
        mask={mask}
        value={value}
        autoFocus={focus}
        keyboardType={type}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
}

const InputWithoutMask = ({
  type,
  label,
  value,
  focus,
  onChange,
  required,
  placeholder,
  maxLength,
  ...props

}) => {
  return (
    <Container>
      {!!label && (<Label>{label} {required && "*"}</Label>)}

      <TextInput
        value={value}
        autoFocus={focus}
        keyboardType={type}
        onChangeText={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
      />
    </Container>
  );
}

Input.defaultProps = {
  mask: false,
  value: "",
  label: "",
  focus: false,
  required: false,
  placeholder: "",
  type: "default",
};
