import { getUserQnaList } from '@/apis/qna';
import { getInfiniteLikedList, getUserInfo } from '@/apis/user';
import { pageSize } from '@/constants/query';
import { productListType } from '@/types/Product/productList';
import { InquiryListType } from '@/types/User/inquiry';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export function useGetUserInfo() {
    const {
        data: userInfo,
        isLoading: isLoadingUserInfo,
        isError: isErrorUserInfo,
    } = useQuery({
        queryKey: [`user`],
        queryFn: () => getUserInfo(),
    });
    return {
        userInfo,
        isLoadingUserInfo,
        isErrorUserInfo,
    };
}

export function useGetUserQnaList() {
    return useInfiniteQuery<InquiryListType, Error>({
        queryKey: ['myQnaList'],
        queryFn: getUserQnaList,
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            // 상품이 0개이거나 rowsPerPage보다 작을 경우 마지막 페이지로 인식한다.
            return lastPage?.count === 0 || lastPage?.count < pageSize
                ? undefined
                : nextPage;
        },
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });
}

export function useGetInfiniteLikedList() {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['LikeList'],
        queryFn: getInfiniteLikedList,
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            // 상품이 0개이거나 rowsPerPage보다 작을 경우 마지막 페이지로 인식한다.
            return lastPage?.count === 0 || lastPage?.count < pageSize
                ? undefined
                : nextPage;
        },
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });
}
