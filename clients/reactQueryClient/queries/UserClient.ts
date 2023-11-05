import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { MutationOptionsWithError } from "../config/MutationOptions";
import { QueryKeys } from "./QueryKeys";
import UserLoginDto from "@/app/_models/UserLoginDto";

export interface UserQueryClient {
  postUserLogin: (body: UserLoginDto) => Promise<string>;
  useUserLogin: (
    options?: MutationOptionsWithError<string, UserLoginDto>
  ) => UseMutationResult<string, AxiosError<ApiErrorResponse>, UserLoginDto>;
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
    options?: MutationOptionsWithError<string, UserLoginDto>
  ): UseMutationResult<string, AxiosError<ApiErrorResponse>, UserLoginDto> => {
    return useMutation<string, AxiosError<ApiErrorResponse>, UserLoginDto>(
      [QueryKeys.UseUserLogin],
      (body) => this.postUserLogin(body),
      options
    );
  };
}
