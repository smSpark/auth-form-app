import { InferValueTypes } from "../../types/redux";
import * as actions from "./actions";

export interface IAuthUser {
  username: string,
}

export interface AuthInitialState {
  token: string,
  user: IAuthUser | null,
}

export enum AuthActionTypes {
  AUTH_REQUEST = "auth/AUTH_REQUEST",
  LOGOUT_REQUEST = "auth/LOGOUT_REQUEST",
  SET_AUTHDATA = "auth/SET_AUTHDATA",
  REMOVE_AUTHDATA = "auth/REMOVE_AUTHDATA",
}

export type AuthActions = ReturnType<InferValueTypes<typeof actions>>;
