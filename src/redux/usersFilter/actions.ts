import { UsersFilterActionType, UsersFilterState } from "./types";

export const changeFilterValue = (value: UsersFilterState) => ({
  type: UsersFilterActionType.CHANGE_VALUE,
  payload: value,
} as const);
