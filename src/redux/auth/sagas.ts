import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { getErrorMessage, getSucessMessage } from "../../assets/js/helpers";
import { api } from "../../assets/js/services";
import { IAuthResponse } from "../../types/api";
import { endLoading, pushMessage, startLoading } from "../app/action";
import { authRequest, removeAuthData, setAuthData } from "./actions";
import { AuthActionTypes, AuthInitialState, IAuthUser } from "./types";

function* fetchAuth(action: ReturnType<typeof authRequest>) {
  try {
    yield put(startLoading());
    const { token }: IAuthResponse = yield call(api.getToken, action.payload);
    const userData: IAuthUser = {
      username: action.payload.username,
    };
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    const authData: AuthInitialState = {
      token,
      user: userData,
    };
    yield put(setAuthData(authData));
    yield put(pushMessage(getSucessMessage(`Hello ${action.payload.username}!`)));
  } catch (error) {
    yield put(pushMessage(getErrorMessage(error.message)));
  } finally {
    yield put(endLoading());
  }
}

function* logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  yield put(removeAuthData());
}

export function* watchFetchAuth(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(AuthActionTypes.AUTH_REQUEST, fetchAuth);
}

export function* watchLogout(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(AuthActionTypes.LOGOUT_REQUEST, logout);
}
