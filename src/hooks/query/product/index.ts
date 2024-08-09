import {
    getProductDetail,
    getProductList,
    getProductRankingList,
    getProductSaleList,
    postInCart,
} from '@/apis/products';
import { productListParamsType } from '@/types/Product/productList';
import { useMutation, useQuery } from '@tanstack/react-query';

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
        queryKey: [`porudctDetail${productSeq}`],
        queryFn: () => getProductDetail(productSeq),
    });
    return {
        productInfo,
        isErrorProductInfo,
        isLoadingProductInfo,
    };
}

export function useGetProductRankingList(option: string) {
    const {
        data: productRankingList,
        isLoading: isLoadingProductRankingList,
        isError: isErrorProductRankingList,
    } = useQuery({
        queryKey: [`productList&${option}`],
        queryFn: () => getProductRankingList(option),
    });
    return {
        productRankingList,
        isLoadingProductRankingList,
        isErrorProductRankingList,
    };
}

export function useGetProductSaleList() {
    const {
        data: productSaleList,
        isLoading: isLoadingProductSaleList,
        isError: isErrorProductSaleList,
    } = useQuery({
        queryKey: [`productSaleList`],
        queryFn: () => getProductSaleList(),
    });
    return {
        productSaleList,
        isLoadingProductSaleList,
        isErrorProductSaleList,
    };
}

export function usePostInCart() {
    const { mutate: mutatePostInCart, isPending: isPendingPostInCart } =
        useMutation({
            mutationFn: (data: { productSeq: number; quantity: number }) =>
                postInCart(data),
        });

    return {
        mutatePostInCart,
        isPendingPostInCart,
    };
}
