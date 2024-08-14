import {
    getProductList,
    getProductQnaList,
    getProductRankingList,
    getProductSaleList,
} from '@/apis/products';
import { productListParamsType } from '@/types/Product/productList';
import { useQuery } from '@tanstack/react-query';

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
