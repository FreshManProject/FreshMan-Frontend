import {
    deleteRecentSearch,
    getQuerySearch,
    getRecentSearchList,
} from '@/apis/search';
import { productItemType } from '@/types/Product/productList';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useDeleteRecentSearch() {
    const mutation = useMutation({
        mutationFn: (index: number) => deleteRecentSearch(index),
        onError: () => console.error('에러 발생'),
    });
    return mutation;
}

export function useGetQuerySearch(
    enableSearch: boolean,
    keyword: string,
    categorySeq?: number,
    lowPrice?: number,
    highPrice?: number,
    sort?: string,
) {
    const { data: querySearchResult, isLoading: isLoadingQuerySearchResult } =
        useQuery<productItemType[]>({
            queryKey: ['querySearchResult'],
            queryFn: () =>
                getQuerySearch(keyword, categorySeq, lowPrice, highPrice, sort),
            enabled: enableSearch,
        });
    return { querySearchResult, isLoadingQuerySearchResult };
}

export function useGetRecentSearchList() {
    const { data: recentSearchList, isLoading: isLoadingRecentSearchList } =
        useQuery({
            queryKey: ['recentSearchList'],
            queryFn: getRecentSearchList,
        });
    return { recentSearchList, isLoadingRecentSearchList };
}
