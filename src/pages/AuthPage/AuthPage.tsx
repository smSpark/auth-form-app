import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { getToken } from "../../redux/auth/selectors";
import { AuthPageWrapper } from "./AuthPageStyle";

const AuthPage: React.FC = () => {
  const authUser = useSelector(getToken);

  if (authUser) {
    return <Redirect to="/" />;
  }

  return (
    <AuthPageWrapper>
      <AuthForm />
    </AuthPageWrapper>
  );
};

export { AuthPage };
