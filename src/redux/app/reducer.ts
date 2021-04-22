import { AppActions, AppActionType, AppState } from "./types";

const initialState: AppState = {
  isLoading: false,
  messages: [],
};

export const appReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case AppActionType.REMOVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages].filter((item) => item.id !== action.payload),
      };
    case AppActionType.PUSH_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case AppActionType.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case AppActionType.LOADING_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
