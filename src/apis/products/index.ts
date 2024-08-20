import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import axios from 'axios';
import { ProductDetailType } from '@/types/Product/productDetail';
import { axiosAuth } from '..';

export const rowsPerPage = 10;

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

export async function getProductDetail(
    productSeq: number,
): Promise<ProductDetailType> {
    try {
        const response = await axiosAuth.get(`/products/${productSeq}`);
        return response.data.data;
    } catch (error) {
        throw Error;
    }
}

export async function getProductRankingList(
    option: string,
): Promise<productListType> {
    try {
        const response = await axiosAuth.get(`/products/ranking?=${option}`);
        return response.data;
    } catch (error) {
        throw Error;
    }
}

export async function getProductSaleList({
    pageParam = 1,
}: {
    pageParam?: unknown;
}): Promise<productListType> {
    try {
        const response = await axios.get<productListType>('/products/onsale', {
            params: {
                page: pageParam,
                limit: rowsPerPage,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch product sale list');
    }
}
