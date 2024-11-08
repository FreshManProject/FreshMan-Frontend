import {
    deleteRecentSearch,
    getRecentSearchList,
    getInfiniteSearchList,
} from '@/apis/search';
import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

export function useDeleteRecentSearch() {
    const mutation = useMutation({
        mutationFn: (index: number) => deleteRecentSearch(index),
        onError: () => console.error('에러 발생'),
    });
    return mutation;
}

export function useGetInfiniteSearchList({
    params,
    status,
}: {
    params: productListParamsType;
    status: boolean;
}) {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['searchResult', JSON.stringify(params)],
        queryFn: ({ pageParam }) =>
            getInfiniteSearchList({ params, pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length;
            // 상품이 0개이거나 rowsPerPage보다 작을 경우 마지막 페이지로 인식한다.
            return lastPage.count === 10 ? nextPage : undefined;
        },
        enabled: status,
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });
}

export function useGetRecentSearchList() {
    const { data: recentSearchList, isLoading: isLoadingRecentSearchList } =
        useQuery({
            queryKey: ['recentSearchList'],
            queryFn: getRecentSearchList,
        });
    return { recentSearchList, isLoadingRecentSearchList };
}
