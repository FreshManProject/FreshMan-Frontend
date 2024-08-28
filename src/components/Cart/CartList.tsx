import { useState } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { cartItemType, cartListType } from '@/types/Product/productList';
import {
    useDeleteItemInCart,
    useGetInfiniteCartList,
    usePatchCart,
} from '@/hooks/query/carts';
import { Checkbox } from '@/components/ui/checkbox';
import CartItem from './CartItem';
import ProductInfiniteList from '../Product/ProductInfiniteList';

interface ICartListProps {
    listData: cartListType;
}

export default function CartList({ listData }: ICartListProps) {
    const result = useGetInfiniteCartList();

    const [isAllChecked, setIsAllChecked] = useState(
        listData.list?.every(({ checked }: cartItemType) => checked),
    );
    const [countSelected, setCountSelected] = useState(
        listData.list?.filter(({ checked }: cartItemType) => checked).length,
    );
    const { mutatePatchCart } = usePatchCart();
    const { mutateDeleteItemInCart } = useDeleteItemInCart();

    const handlePatchCartItem = (newCheck: boolean) => {
        mutatePatchCart({
            checked: newCheck,
        });
    };

    const onAllCheckedChange = async (checked: CheckedState) => {
        const newCheckedState = !!checked;

        try {
            setIsAllChecked(newCheckedState);
            setCountSelected(newCheckedState ? listData.count : 0);
            handlePatchCartItem(newCheckedState);
        } catch (error) {
            console.error('Failed to update cart items:', error);
            setIsAllChecked(!newCheckedState);
            setCountSelected(!newCheckedState ? listData.count : 0);
        }
    };

    const handleDeleteSelected = () => {
        listData.list?.map(
            ({ productSeq, checked }) =>
                checked && mutateDeleteItemInCart({ productSeq }),
        );
    };

    return (
        <>
            <div className="flex items-center justify-between px-4 pb-2.5 pt-1 text-body3">
                <div className="flex h-8 items-center gap-2.5">
                    <Checkbox
                        disabled={listData.count === 0}
                        checked={isAllChecked}
                        onCheckedChange={onAllCheckedChange}
                        className="h-5 w-5 border-gray300 data-[state=checked]:bg-black data-[state=checked]:text-white"
                    />
                    <p>{`전체선택 (${countSelected}/${listData.count})`}</p>
                </div>
                <button
                    type="button"
                    onClick={handleDeleteSelected}
                    className="text-center text-gray400"
                >
                    {'선택삭제'}
                </button>
            </div>
            <ProductInfiniteList<cartItemType, cartListType> result={result}>
                {(item) => <CartItem key={item.productSeq} {...item} />}
            </ProductInfiniteList>
        </>
    );
}
