import axios from 'axios';
import { productListType } from '@/types/Product/productList';
import { axiosAuth } from '..';

export default async function getLikeList(): Promise<productListType> {
    try {
        const response = await axiosAuth.get('/likes?orderby=latest');
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}

export async function getInquiryList() {
    try {
        const response = await axios.get('/api/contact');
        if (response.data) {
            return response.data.data;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getUserInfo() {
    try {
        const response = await axiosAuth.get('/members');
        if (response.data) {
            return response.data.data;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
