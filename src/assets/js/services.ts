import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAuthPost, IAuthResponse, IUsersResponse } from "../../types/api";
import { URL, URLInterface } from "./constants";

class ApiService {
  private AUTH_URL: string;

  private USER_URL: string;

  private token: string | null;

  private axiosOption: AxiosRequestConfig;

  constructor(URLS: URLInterface) {
    this.AUTH_URL = URLS.AUTH;
    this.USER_URL = URLS.USER;
    this.token = localStorage.getItem("token");
    this.axiosOption = {
      baseURL: URLS.BASE,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ? `Token ${this.token}` : ""}`,
      },
      timeout: 1500,
    };

    this.getToken = this.getToken.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.refreshHeader = this.refreshHeader.bind(this);
  }

  static async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    const { data }: AxiosResponse<T> = await axios(url, options);
    return data;
  }

  static async post<S, T>(url: string, postData?: T, options?: AxiosRequestConfig) {
    const { data } = await axios.post<S>(url, postData, options);
    return data;
  }

  private refreshHeader() {
    this.axiosOption = {
      ...this.axiosOption,
      headers: {
        ...this.axiosOption.headers,
        Authorization: `Token ${this.token}`,
      },
    };
  }

  public async getToken(postData: IAuthPost) {
    const data = await ApiService.post<IAuthResponse, IAuthPost>(
      this.AUTH_URL,
      postData,
      this.axiosOption,
    );
    this.token = data.token;
    this.refreshHeader();
    return data;
  }

  public async getUsers() {
    const data = await ApiService.get<IUsersResponse[]>(this.USER_URL, this.axiosOption);
    return data;
  }
}

const api = new ApiService(URL);

export { api };
