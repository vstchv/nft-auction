import { QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type QueryOptions<TData> = UseQueryOptions<
  TData,
  AxiosError,
  TData,
  QueryKey
>;
