import React from "react";
import { AuthFormContainer, AuthFormTitle, UserAvatarImage } from "./AuthFormStyle";
import { AuthLoginForm } from "../AuthLoginForm/AuthLoginForm";

const AuthForm: React.FC = () => {
  return (
    <AuthFormContainer>
      <AuthFormTitle>sign in</AuthFormTitle>
      <UserAvatarImage />
      <AuthLoginForm />
    </AuthFormContainer>
  );
};

export { AuthForm };
