import { KeyStringInterface } from "../../types/common";
import { InferValueTypes } from "../../types/redux";
import * as actions from "./actions";

export enum UsersFilterActionType {
  CHANGE_VALUE = "userFilter/CHANGE_VALUE",
}

export interface UsersFilterState extends KeyStringInterface {
  readonly name: string;
}

export type PossibleFilterName = keyof UsersFilterState;

export type UsersFilterActions = ReturnType<InferValueTypes<typeof actions>>;
