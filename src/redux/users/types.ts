import { IUsersResponse } from "../../types/api";

import { InferValueTypes } from "../../types/redux";
import * as actions from "./actions";

export enum UsersActionTypes {
  FETCH_USERS = "users/FETCH_USERS",
  SET_USERS = "users/SET_USERS",
  SET_SORT_TYPE = "users/SET_SORT_TYPE",
  CHANGE_SORT_DIRECTION = "users/CHANGE_SORT_DIRECTION",
}

export enum PossibleSortTypes {
  NOT_SORTED = "NOT_SORTED",
  BY_ID = "BY_ID",
}

export interface UsersInitialState {
  readonly data: IUsersResponse[],
  readonly sortType: PossibleSortTypes,
  readonly sortDirectionToLow: boolean,
}

export type UsersActions = ReturnType<InferValueTypes<typeof actions>>;
