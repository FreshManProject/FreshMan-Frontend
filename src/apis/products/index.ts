import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import axios from 'axios';
import { ProductDetailType } from '@/types/Product/productDetail';
import { BASE_URL, axiosAuth } from '..';

export async function getProductList(
    params: productListParamsType,
): Promise<productListType> {
    // categorySeq: number, lowPrice?: number, highPrice?: number, sort?: string
    const url = new URL(`/products`, BASE_URL);

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

export async function getProductSaleList(): Promise<productListType> {
    try {
        const response = await axiosAuth.get(`/products/onsale`);
        return response.data;
    } catch (error) {
        throw Error;
    }
}
