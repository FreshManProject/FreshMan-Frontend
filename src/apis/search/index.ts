import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import requests from '../requests';
import { BASE_URL, axiosAuth } from '..';

export async function getRecentSearchList() {
    try {
        const response = await axiosAuth.get(requests.recentSearchList);
        if (response.data) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getSearch(
    params: productListParamsType,
): Promise<productListType> {
    // categorySeq: number, lowPrice?: number, highPrice?: number, sort?: string, keyword?: string
    const url = new URL(`/products`, BASE_URL);

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.append(key, value.toString());
        }
    });
    try {
        const response = await axiosAuth.get(url.toString());
        return response.data;
    } catch (error) {
        throw Error;
    }
}

export async function deleteRecentSearch(index: number) {
    try {
        const response = await axiosAuth.delete(
            `${requests.recentSearchList}?index=${index}`,
        );
        if (response.data) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
