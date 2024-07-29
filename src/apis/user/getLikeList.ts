import { productListType } from '@/types/Product/productList';
import axios from 'axios';

export default async function getLikeList(): Promise<productListType> {
    try {
        const response = await axios.get('/likes?orderby=latest');
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}
