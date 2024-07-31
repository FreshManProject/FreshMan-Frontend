import { getQuerySearch } from '@/apis/search/getQuerySearch';
import { productItemType } from '@/types/Product/productList';
import { useQuery } from '@tanstack/react-query';

export default function useGetQuerySearch(
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
