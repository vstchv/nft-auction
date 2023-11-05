import { AxiosError, AxiosResponse, AxiosInstance } from "axios";
import {
  UseMutationResult,
  UseQueryResult,
  useQuery,
  useMutation,
} from "@tanstack/react-query";
import { QueryOptions } from "../config/QueryOptions";
import { QueryKeys } from "./QueryKeys";
import UserLoginDto from "@/app/_models/UserLoginDto";
import { MutationOptions } from "../config/MutationOptions";

export interface UserQueryClient {
  postUserLogin: (body: UserLoginDto) => Promise<string>;
  useUserLogin: (
    options?: MutationOptions<string, UserLoginDto>
  ) => UseMutationResult<string, AxiosError, UserLoginDto>;
}

export function createUserQueryClient(axios: AxiosInstance): UserQueryClient {
  return new UserImplementation(axios);
}

class UserImplementation {
  public constructor(private axios: AxiosInstance) {}

  public postUserLogin = async (body: UserLoginDto) => {
    return this.axios
      .post("/api/users/login", body)
      .then((response: AxiosResponse<string>) => {
        return response.data;
      });
  };
  public useUserLogin = (
    options?: MutationOptions<string, UserLoginDto>
  ): UseMutationResult<string, AxiosError, UserLoginDto> => {
    return useMutation<string, AxiosError, UserLoginDto>(
      [QueryKeys.UseUserLogin],
      (body) => this.postUserLogin(body),
      options
    );
  };
}
