import { AuthActions, AuthActionTypes, AuthInitialState, IAuthUser } from "./types";

const inititalUser = (): IAuthUser | null => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};
// Оставил поле user, с бэкенда не приходят данные пользователя, но данные хранились бы здесь.
const initialState: AuthInitialState = {
  token: localStorage.getItem("token") || "",
  user: inititalUser(),
};

export const authReducer = (state = initialState, action: AuthActions): AuthInitialState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTHDATA:
      return action.payload;
    case AuthActionTypes.REMOVE_AUTHDATA:
      return {
        token: "",
        user: null,
      };
    default:
      return state;
  }
};
