import { KeyStringInterface } from "./common";

export interface IAuthPost extends KeyStringInterface {
  username: string,
  password: string,
}

export interface IAuthResponse {
  token: string,
}

export interface IUsersResponse {
  id: number,
  username: string,
  "first_name": string,
  "last_name": string,
  "is_active": boolean,
  "last_login": string,
  "is_superuser": boolean,
}
