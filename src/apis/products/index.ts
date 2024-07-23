import { productListParamsType } from '@/types/Product/productList';
import axios from 'axios';

export async function getProductList(params: productListParamsType) {
    // categorySeq: number, lowPrice?: number, highPrice?: number, sort?: string
    const url = new URL(`/products`, 'http://localhost:3000');

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            url.searchParams.append(key, value.toString());
        }
    });
    console.log(url, params, 'object');
    try {
        const response = await axios.get(url.toString());
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
