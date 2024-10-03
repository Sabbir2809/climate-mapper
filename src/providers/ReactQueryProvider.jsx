"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cache, useState } from "react";

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    },
    mutations: {
      onError: () => {
        /** You can use toast or notification here */
        // console.error(error.message);
      },
    },
  },
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));

const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
