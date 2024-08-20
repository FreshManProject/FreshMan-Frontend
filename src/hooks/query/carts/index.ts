import {
    deleteItemInCart,
    getCartList,
    patchCart,
    patchCartItem,
    postInCart,
} from '@/apis/carts';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useGetCartList() {
    const {
        data: cartList,
        isLoading: cartListIsLoading,
        error,
    } = useQuery({
        queryKey: ['cartList'],
        queryFn: getCartList,
    });
    return {
        cartList,
        cartListIsLoading,
        error,
    };
}

export function usePatchCart() {
    const { mutate: mutatePatchCart, isPending: isPendingPatchCart } =
        useMutation({
            mutationFn: (data: { checked: boolean }) => patchCart(data),
        });

    return {
        mutatePatchCart,
        isPendingPatchCart,
    };
}

export function usePatchCartItem() {
    const { mutate: mutatePatchCartItem, isPending: isPendingPatchCarItem } =
        useMutation({
            mutationFn: (data: {
                productSeq: number;
                quantity: number;
                checked: boolean;
            }) => patchCartItem(data),
        });

    return {
        mutatePatchCartItem,
        isPendingPatchCarItem,
    };
}

export function usePostInCart() {
    const { mutate: mutatePostInCart, isPending: isPendingPostInCart } =
        useMutation({
            mutationFn: (data: { productSeq: number; quantity: number }) =>
                postInCart(data),
        });

    return {
        mutatePostInCart,
        isPendingPostInCart,
    };
}

export function useDeleteItemInCart() {
    const { mutate: mutateDeleteItemInCart, isPending: isPendingDeleteInCart } =
        useMutation({
            mutationFn: (data: { productSeq: number }) =>
                deleteItemInCart(data),
        });

    return {
        mutateDeleteItemInCart,
        isPendingDeleteInCart,
    };
}
