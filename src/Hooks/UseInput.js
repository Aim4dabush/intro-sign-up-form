import { useState } from "react";

export const useInput = (validateInput) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(value);
  const error = !valueIsValid && isTouched;

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    error,
    handleOnChange,
    handleOnBlur,
    reset,
  };
};
