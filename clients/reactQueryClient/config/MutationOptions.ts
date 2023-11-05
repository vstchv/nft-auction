import { AxiosError } from "axios";
import { CustomAxiosError } from "./CustomAxiosError";
import { UseMutationOptions } from "@tanstack/react-query";

export type MutationOptions<TData, TProperties> = UseMutationOptions<
  TData,
  AxiosError,
  TProperties,
  unknown
>;

export type MutationOptionsWithError<TData, TProperties> = UseMutationOptions<
  TData,
  CustomAxiosError,
  TProperties,
  unknown
>;
