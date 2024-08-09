import { productItemType } from '@/types/Product/productList';
import requests from '../requests';
import { axiosAuth } from '..';

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

export async function getQuerySearch(
    keyword: string,
    categorySeq?: number,
    lowPrice?: number,
    highPrice?: number,
    sort?: string,
): Promise<productItemType[]> {
    let apiUrl = `/products?keyword=${keyword}`;
    if (categorySeq !== undefined) apiUrl += `&categorySeq=${categorySeq}`;
    if (lowPrice !== undefined) apiUrl += `&lowPrice=${lowPrice}`;
    if (highPrice !== undefined) apiUrl += `&highPrice=${highPrice}`;
    if (sort !== undefined) apiUrl += `&sort=${sort}`;
    console.log(`${process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL}${apiUrl}`);
    try {
        const response = await axiosAuth.get(apiUrl);
        if (response.data.status === 200) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
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
