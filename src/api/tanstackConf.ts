import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            retry: false,
            refetchOnMount: true,
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});