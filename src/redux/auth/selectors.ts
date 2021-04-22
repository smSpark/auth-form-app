import { RootState } from "../../types/redux";
import { IAuthUser } from "./types";

export const getUserData = (store: RootState): IAuthUser | null => store.auth.user;
export const getToken = (store: RootState): string => store.auth.token;
