import { ChangeEvent, useState } from "react";

type validation = (value: string) => boolean;

const useInput = (validation:validation) => {
  
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid:  boolean = validation(enteredValue);

  const hasError = !valueIsValid && isTouched;

  function onChangeValueHandler(event: ChangeEvent<HTMLInputElement>) {
    setIsTouched(true);
    setEnteredValue(event.target.value);
  }

  function onBlurInputHandler() {
    setIsTouched(true);
  }

  function reset (){
    setIsTouched(false);
    setEnteredValue('');
  }

  return {
    enteredValue,
    hasError,
    onBlurInputHandler,
    onChangeValueHandler,
    reset
  };
};

export default useInput;
