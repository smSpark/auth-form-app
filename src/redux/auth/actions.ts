import { IAuthPost } from "../../types/api";
import { AuthActionTypes, AuthInitialState } from "./types";

export const authRequest = (authData: IAuthPost) => ({
  type: AuthActionTypes.AUTH_REQUEST,
  payload: authData,
} as const);

export const setAuthData = (authData: AuthInitialState) => ({
  type: AuthActionTypes.SET_AUTHDATA,
  payload: authData,
} as const);

export const removeAuthData = () => ({
  type: AuthActionTypes.REMOVE_AUTHDATA,
} as const);

export const logoutRequest = () => ({
  type: AuthActionTypes.LOGOUT_REQUEST,
} as const);
