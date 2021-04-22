import { PossibleSortTypes, UsersActions, UsersActionTypes, UsersInitialState } from "./types";

const initialState: UsersInitialState = {
  data: [],
  sortDirectionToLow: true,
  sortType: PossibleSortTypes.NOT_SORTED,
};

export const usersReducer = (state = initialState, action: UsersActions): UsersInitialState => {
  switch (action.type) {
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        data: action.payload,
      };
    case UsersActionTypes.SET_SORT_TYPE:
      return {
        ...state,
        sortDirectionToLow: true,
        sortType: state.sortType === action.payload ? PossibleSortTypes.NOT_SORTED : action.payload,
      };
    case UsersActionTypes.CHANGE_SORT_DIRECTION:
      return {
        ...state,
        sortDirectionToLow: !state.sortDirectionToLow,
      };
    default:
      return state;
  }
};
