import {
    deleteRecentSearch,
    getRecentSearchList,
    getSearch,
} from '@/apis/search';
import { productListParamsType } from '@/types/Product/productList';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useDeleteRecentSearch() {
    const mutation = useMutation({
        mutationFn: (index: number) => deleteRecentSearch(index),
        onError: () => console.error('에러 발생'),
    });
    return mutation;
}

export function useGetSearch(params: productListParamsType) {
    const { data: searchResult, isLoading: isLoadingSearchResult } = useQuery({
        queryKey: ['searchResult'],
        queryFn: () => getSearch(params),
    });
    return { searchResult, isLoadingSearchResult };
}

export function useGetRecentSearchList() {
    const { data: recentSearchList, isLoading: isLoadingRecentSearchList } =
        useQuery({
            queryKey: ['recentSearchList'],
            queryFn: getRecentSearchList,
        });
    return { recentSearchList, isLoadingRecentSearchList };
}
