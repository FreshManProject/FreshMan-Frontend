import { productListType } from '@/types/Product/productList';
import axios from 'axios';
import { axiosAuth } from '..';

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
export async function getUserInquiryList() {
    try {
        const response = await axiosAuth.get(`/questions/my-questions`);
        if (response.data) {
            console.log(response.data);
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
        const response = await axios.get('/members');
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
