import { ChangeEvent, FormEvent, useState } from "react";
import { KeyStringInterface } from "../types/common";

export interface UseFormReturn<T> {
  values: T;
  errors: KeyStringInterface;
  changeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  resetValues: () => void;
  resetErrors: () => void;
  submitHandler: (evt: FormEvent<HTMLFormElement>) => void;
}

export const useForm = <T extends KeyStringInterface = KeyStringInterface>(
  callback?: (values: T) => void,
  validate?: (values: T) => T,
): UseFormReturn<T> => {
  const [values, setValues] = useState<T>({} as T);
  const [errors, setErrors] = useState<T>({} as T);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const fieldName = evt.currentTarget.name;
    const fieldValue = evt.currentTarget.value;
    setValues(
      (state) =>
        ({
          ...state,
          [fieldName]: fieldValue,
        } as T),
    );
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (validate === undefined || callback === undefined) return;

    const errorsValid = validate(values);

    if (!Object.keys(errorsValid).length) {
      callback(values);
    } else {
      setErrors(errorsValid);
      Object.keys(values).forEach((input) => {
        if (input.includes("password")) {
          setValues((value) => ({
            ...value,
            [input]: "",
          }));
        }
      });
    }
  };

  const resetValues = () => {
    setValues({} as T);
  };

  const resetErrors = () => {
    if (Object.keys(errors).length !== 0) {
      setErrors({} as T);
    }
  };

  return {
    values,
    errors,
    changeHandler,
    resetValues,
    submitHandler,
    resetErrors,
  };
};
