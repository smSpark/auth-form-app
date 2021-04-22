import { createSelector } from "reselect";
import { IUsersResponse } from "../../types/api";
import { RootState } from "../../types/redux";
import { UsersFilterState } from "../usersFilter/types";
import { PossibleSortTypes } from "./types";

export const getUsersData = (store: RootState): IUsersResponse[] => store.users.data;
export const getSortType = (store: RootState): PossibleSortTypes => store.users.sortType;
export const getSortDirection = (store: RootState): boolean => store.users.sortDirectionToLow;
export const getFilterValue = (store: RootState): UsersFilterState => store.filter;

export const getFilterdUsers = createSelector(
  [getUsersData, getFilterValue],
  (users, filterValues) => {
    return users.filter((user) => {
      const username = user.username.toLowerCase();
      const isUserNameCoincidence = filterValues.name
        ? username.includes(filterValues.name.toLowerCase())
        : true;
      return isUserNameCoincidence;
    });
  },
);

export const getSortedUsers = createSelector(
  [getFilterdUsers, getSortType, getSortDirection],
  (users, sortType, sortDirection) => {
    switch (sortType) {
      case PossibleSortTypes.BY_ID:
        return [...users].sort((a, b) => {
          return sortDirection ? a.id - b.id : b.id - a.id;
        });
      case PossibleSortTypes.NOT_SORTED:
        return users;
      default:
        return users;
    }
  },
);
