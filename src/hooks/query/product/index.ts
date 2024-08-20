import {
    getProductDetail,
    getProductList,
    getProductRankingList,
    getProductSaleList,
} from '@/apis/products';
import { getProductQnaList, getQnaAnswer } from '@/apis/qna';
import { pageSize } from '@/constants/query';
import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

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

export function useGetProductRankingList(option: string) {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['productRanking'],
        queryFn: ({ pageParam }) =>
            getProductRankingList({ pageParam, option }),
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

export function useGetProductSaleList() {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['productSale'],
        queryFn: getProductSaleList,
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

export function useGetProductQnaList(productSeq: number) {
    const {
        data: productQnaList,
        isLoading: isLoadingProductQnaList,
        isError: isErrorProductQnaList,
    } = useQuery({
        queryKey: [`productQnaList`],
        queryFn: () => getProductQnaList(productSeq),
    });
    return {
        productQnaList,
        isLoadingProductQnaList,
        isErrorProductQnaList,
    };
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
