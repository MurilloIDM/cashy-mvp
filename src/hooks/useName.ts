import React from "react";

interface UseNameResponse {
  name: string;
  setName: (name: string) => void;
  validateName: () => boolean;
}

export function useName(initialValue: string): UseNameResponse {
  const [name, setValue] = React.useState(initialValue);

  function setName(value: string): void {
    setValue(value);
  }

  function validateName(): boolean {
    const regex = /[a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ]* [a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ](.*)/;

    if (regex.test(name)) {
      return false;
    }

    return true;
  }

  return { name, setName, validateName };
}