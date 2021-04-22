import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import { watchFetchAuth, watchLogout } from "./auth/sagas";
import { watchFetchUsers } from "./users/sagas";

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
  > {
  yield all([watchFetchAuth(), watchFetchUsers(), watchLogout()]);
}
