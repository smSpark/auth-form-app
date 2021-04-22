import { IUsersResponse } from "../../types/api";
import { PossibleSortTypes, UsersActionTypes } from "./types";

export const setUsers = (data: IUsersResponse[]) => ({
  type: UsersActionTypes.SET_USERS,
  payload: data,
} as const);

export const fetchUsers = () => ({
  type: UsersActionTypes.FETCH_USERS,
} as const);

export const setSortType = (sortType: PossibleSortTypes) => ({
  type: UsersActionTypes.SET_SORT_TYPE,
  payload: sortType,
} as const);

export const changeSortDirection = () => ({
  type: UsersActionTypes.CHANGE_SORT_DIRECTION,
} as const);
