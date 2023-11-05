import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC } from "react";

interface QueryClientWrapperProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const ReactQueryWrapper: FC<QueryClientWrapperProps> = (
  props: QueryClientWrapperProps
) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default ReactQueryWrapper;
