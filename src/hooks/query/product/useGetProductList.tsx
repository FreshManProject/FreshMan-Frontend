import { getProductList } from '@/apis/products';
import { productListParamsType } from '@/types/Product/productList';
import { useQuery } from '@tanstack/react-query';

export default function useGetProductList(params: productListParamsType) {
    const { data: productList } = useQuery({
        queryKey: ['productList'],
        queryFn: () => getProductList(params),
    });

    return {
        productList,
    };
}
