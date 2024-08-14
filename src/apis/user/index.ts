import { axiosAuth } from '..';
import { cartListType, productListType } from '@/types/Product/productList';
import axios from 'axios';

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
export async function getCartList(): Promise<cartListType> {
    try {
        const response = await axios.get('/carts');
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}

export async function patchCart(data: { checked: boolean }) {
    try {
        const response = await axios.patch(`/carts`, data);
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response: ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(
                'Axios error:',
                error.response?.data || error.message,
            );
            throw new Error(error.response?.data?.message || error.message);
        }
        console.error('Unknown error:', error);
        throw new Error('An unknown error occurred');
    }
}

export async function patchCartItem(data: {
    productSeq: number;
    checked: boolean;
}) {
    try {
        const response = await axios.patch(`/carts/${data.productSeq}`, data);
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response: ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(
                'Axios error:',
                error.response?.data || error.message,
            );
            throw new Error(error.response?.data?.message || error.message);
        }
        console.error('Unknown error:', error);
        throw new Error('An unknown error occurred');
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
