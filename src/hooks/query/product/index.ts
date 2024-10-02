import {
    getProductDetail,
    getProductList,
    getInfiniteRankingList,
    getInfiniteSaleList,
} from '@/apis/products';
import { getInfiniteQnaList, getQnaAnswer, postQnaAnswer } from '@/apis/qna';
import { pageSize } from '@/constants/infinitescroll';
import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import { QnaListType, QnaParamsType } from '@/types/User/qna';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useGetProductList(
    params: productListParamsType,
    status: boolean = true,
) {
    const { data: productList, isLoading: isLoadingProductList } = useQuery({
        queryKey: [
            `productList&${params.categorySeq}&${params.lowPrice}&${params.highPrice}&${params.sort}`,
        ],
        queryFn: () => getProductList(params),
        enabled: status,
    });
    return {
        productList,
        isLoadingProductList,
    };
}

export function useGetProductDetail(productSeq: number) {
    const {
        data: productInfo,
        isLoading: isLoadingProductInfo,
        isError: isErrorProductInfo,
    } = useQuery({
        queryKey: [`productDetail${productSeq}`],
        queryFn: () => getProductDetail(productSeq),
    });
    return {
        productInfo,
        isErrorProductInfo,
        isLoadingProductInfo,
    };
}

export function useGetInfiniteRankingList(option: string) {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['productRanking'],
        queryFn: ({ pageParam }) =>
            getInfiniteRankingList({ pageParam, option }),
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

export function useGetInfiniteSaleList() {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['productSale'],
        queryFn: getInfiniteSaleList,
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

export function useGetInfiniteQnaList(productSeq: number) {
    return useInfiniteQuery<QnaListType, Error>({
        queryKey: ['productQnaList'],
        queryFn: ({ pageParam }) =>
            getInfiniteQnaList({ pageParam, productSeq }),
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

// 상품 문의 답변
export function useGetQnaAnswer(
    questionSeq: number | string,
    isFetching: boolean,
) {
    const {
        data: answer,
        isLoading: isLoadingAnswer,
        isError: isErrorAnswer,
        isSuccess: isSuccessAnswer,
    } = useQuery({
        queryKey: [`qnaAnswer`],
        queryFn: () => getQnaAnswer(questionSeq),
        enabled: isFetching,
    });
    return {
        answer,
        isLoadingAnswer,
        isErrorAnswer,
        isSuccessAnswer,
    };
}

export function usePostQnA() {
    const navigate = useNavigate();
    const [productSeq, setProductSeq] = useState(0);
    const { isPending: isPendingPostQnA, mutate: mutatePostQnA } = useMutation({
        mutationFn: (data: QnaParamsType) => {
            setProductSeq(data.productSeq);
            return postQnaAnswer(data);
        },
        onSuccess: () => {
            navigate(`/products/${productSeq}`);
        },
    });

    return {
        mutatePostQnA,
        isPendingPostQnA,
    };
}
