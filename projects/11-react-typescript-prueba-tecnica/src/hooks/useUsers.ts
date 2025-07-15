// js
// react
// third
import { useInfiniteQuery } from "@tanstack/react-query";
// own
import type { User } from "../interfaces/types";
import { fetchUsers } from "../services/users";

export function useUsers() {
    const {
        isLoading,
        isError,
        data,
        refetch,
        fetchNextPage,
        hasNextPage

    } = useInfiniteQuery<{ users: User[], nextPage?: number }>({
        queryKey: ['users'],
        queryFn: async ({ pageParam = 1 }) => fetchUsers({ pageParam: Number(pageParam) }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage
    });

    return {
        isLoading,
        isError,
        users: data?.pages.flatMap(page => page.users) || [],
        refetch,
        fetchNextPage,
        hasNextPage
    };
}