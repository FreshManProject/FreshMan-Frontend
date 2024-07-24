import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import axios from 'axios';

export async function getProductList(
    params: productListParamsType,
): Promise<productListType> {
    // categorySeq: number, lowPrice?: number, highPrice?: number, sort?: string
    // TODO: baseURL 바꿔야함
    const url = new URL(`/products`, 'http://localhost:3000');
    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.append(key, value.toString());
        }
    });
    try {
        const response = await axios.get(url.toString());
        return response.data;
    } catch (error) {
        throw Error;
    }
}
