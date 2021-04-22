import React from "react";
import { useDispatch } from "react-redux";
import {
  AuthErrorMessage,
  AuthFormWrapper,
  AuthInput,
  AuthInputWrapper,
} from "../../styles/FormStyle";
import { StyledButton } from "../../styles/ButtonStyle";
import { useForm } from "../../hooks/useForm";
import { CommonInput } from "../../types/common";
import { IAuthPost } from "../../types/api";
import { authRequest } from "../../redux/auth/actions";
import { loginFormValid } from "../../assets/js/validations";

export interface AuthLoginInputs extends CommonInput {
  name: Extract<keyof IAuthPost, string>;
}

const loginInputs: AuthLoginInputs[] = [
  {
    id: "login-username",
    placeholder: "User Name",
    type: "text",
    name: "username",
  },
  {
    id: "login-password",
    placeholder: "Password",
    type: "password",
    name: "password",
  },
];

const AuthLoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values: IAuthPost) => {
    dispatch(authRequest(values));
  };

  const { values, errors, changeHandler, submitHandler, resetErrors } = useForm<IAuthPost>(
    onFormSubmit,
    loginFormValid,
  );

  return (
    <AuthFormWrapper onSubmit={submitHandler}>
      {loginInputs.map(({ id, name, placeholder, type }) => (
        <AuthInputWrapper key={id}>
          <AuthInput
            value={values[name] || ""}
            errors={errors[name] || ""}
            placeholder={placeholder}
            type={type}
            name={name}
            onFocus={resetErrors}
            onChange={changeHandler}
          />
          {errors[name] && <AuthErrorMessage>{errors[name]}</AuthErrorMessage>}
        </AuthInputWrapper>
      ))}
      <StyledButton type="submit">log in</StyledButton>
    </AuthFormWrapper>
  );
};

export { AuthLoginForm };
