import { cartListType } from '@/types/Product/productList';
import { axiosAuth } from '..';

export async function getInfiniteCartList({
    pageParam = 1,
}: {
    pageParam?: unknown;
}): Promise<cartListType> {
    try {
        const response = await axiosAuth.get<cartListType>('/carts', {
            params: {
                page: pageParam,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch cart list');
    }
}

export async function getCartList(): Promise<cartListType> {
    try {
        const response = await axiosAuth.get<cartListType>('/carts');

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch cart list');
    }
}

export async function patchCart(data: { checked: boolean }) {
    try {
        const response = await axiosAuth.patch(`/carts`, data);
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response: ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        throw new Error('An unknown error occurred');
    }
}

export async function patchCartItem(data: {
    productSeq: number;
    quantity: number;
}) {
    try {
        const response = await axiosAuth.patch(
            `/carts/${data.productSeq}`,
            data,
        );
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response: ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        throw new Error('An unknown error occurred');
    }
}

export async function postInCart(data: {
    productSeq: number;
    quantity: number;
}) {
    try {
        const response = await axiosAuth.post('/carts', { data });
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        throw Error;
    }
}

export async function deleteItemInCart(data: { productSeq: number }) {
    try {
        const response = await axiosAuth.delete(`/carts/${data.productSeq}`);
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response: ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        throw new Error('An unknown error occurred');
    }
}
