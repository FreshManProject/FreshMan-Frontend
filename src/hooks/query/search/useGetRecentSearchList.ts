import { getRecentSearchList } from '@/apis/search/getRecentSearchList';
import { useQuery } from '@tanstack/react-query';

export default function useGetRecentSearchList() {
    const { data: recentSearchList, isLoading: isLoadingRecentSearchList } =
        useQuery({
            queryKey: ['recentSearchList'],
            queryFn: getRecentSearchList,
        });
    return { recentSearchList, isLoadingRecentSearchList };
}
