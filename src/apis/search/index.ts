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

export async function getInfiniteSearchList({
    params,
    pageParam = 1,
}: {
    params: productListParamsType;
    pageParam?: unknown;
}): Promise<productListType> {
    // categorySeq: number, lowPrice?: number, highPrice?: number, sort?: string, keyword?: string
    const url = new URL(`/products/search`, BASE_URL);

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.append(key, value.toString());
        }
    });

    try {
        const response = await axiosAuth.get(
            `${url.toString()}&page=${pageParam}`,
        );
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch search list');
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
