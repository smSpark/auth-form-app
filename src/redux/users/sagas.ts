import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { UsersActionTypes } from "./types";
import { setUsers } from "./actions";
import { endLoading, pushMessage, startLoading } from "../app/action";
import { api } from "../../assets/js/services";
import { getErrorMessage } from "../../assets/js/helpers";

interface ResponseGenerator{
  id: number,
  username: string,
  "first_name": string,
  "last_name": string,
  "is_active": boolean,
  "last_login": string,
  "is_superuser": boolean,
}

function* fetchUsers() {
  try {
    yield put(startLoading());
    const users: ResponseGenerator[] = yield call(api.getUsers);
    yield put(setUsers(users));
  } catch (error) {
    yield put(pushMessage(getErrorMessage(error.message)));
  } finally {
    yield put(endLoading());
  }
}

export function* watchFetchUsers(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(UsersActionTypes.FETCH_USERS, fetchUsers);
}
