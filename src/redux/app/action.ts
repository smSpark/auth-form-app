import { AppActionType, PossibleMessage } from "./types";

export const startLoading = () => ({
  type: AppActionType.LOADING_START,
} as const);

export const endLoading = () => ({
  type: AppActionType.LOADING_FINISHED,
} as const);

export const pushMessage = (message: PossibleMessage) => ({
  type: AppActionType.PUSH_MESSAGE,
  payload: message,
} as const);

export const clearMessage = (id: string) => ({
  type: AppActionType.REMOVE_MESSAGE,
  payload: id,
} as const);
