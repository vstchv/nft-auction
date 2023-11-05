import { UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type MutationOptions<TData, TProperties> = UseMutationOptions<
  TData,
  AxiosError,
  TProperties,
  unknown
>;
