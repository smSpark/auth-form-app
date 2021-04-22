/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../redux/auth/selectors";

const ProtectedRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const authUser = useSelector(getToken);

  return authUser ? <Route {...rest} component={Component} /> : <Redirect to="/login/" />;
};

export { ProtectedRoute };
