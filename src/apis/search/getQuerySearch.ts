import { productItemType } from '@/types/Product/productList';
import instance from '../axios';

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
        const response = await instance.get(apiUrl);
        if (response.data.status === 200) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}