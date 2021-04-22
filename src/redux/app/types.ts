import { InferValueTypes } from "../../types/redux";
import * as actions from "./action";

export interface AppState {
  isLoading: boolean,
  messages: PossibleMessage[],
}

export enum PossibleMessageTypes {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING"
}

export interface PossibleMessage {
  id: string,
  type: PossibleMessageTypes,
  content: string,
  lifetime?: number,
}

export enum AppActionType {
  PUSH_MESSAGE = "app/PUSH_MESSAGE",
  REMOVE_MESSAGE = "app/REMOVE_MESSAGE",
  LOADING_START = "app/LOADING_START",
  LOADING_FINISHED = "app/LOADING_FINISHED",
}

export type AppActions = ReturnType<InferValueTypes<typeof actions>>;
