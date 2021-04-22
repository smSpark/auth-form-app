import { RootState } from "../../types/redux";
import { PossibleMessage } from "./types";

export const getLoadingStatus = (store: RootState): boolean => store.app.isLoading;
export const getMessages = (store: RootState): PossibleMessage[] => store.app.messages;
