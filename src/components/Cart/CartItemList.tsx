import { useEffect, useState } from 'react';

import { CheckedState } from '@radix-ui/react-checkbox';
import { patchCart } from '@/apis/user';
import { cartItemType, cartListType } from '@/types/Product/productList';
import { Checkbox } from '@/components/ui/checkbox';
import CartItem from './CartItem';

interface ICartListProps {
    listData: cartListType;
}

export default function CartItemList({ listData }: ICartListProps) {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [countSelected, setCountSelected] = useState(0);

    const onAllCheckedChange = async (checked: CheckedState) => {
        const newCheckedState = !!checked;

        try {
            setIsAllChecked(newCheckedState);
            setCountSelected(newCheckedState ? listData.count : 0);

            const response = await patchCart({ checked: newCheckedState });

            if (response.status === 200) {
                console.log('All cart items updated:', response.updatedItems);
            } else {
                throw new Error('Update failed');
            }
        } catch (error) {
            console.error('Failed to update cart items:', error);
            setIsAllChecked(!newCheckedState);
            setCountSelected(!newCheckedState ? listData.count : 0);
        }
    };

    useEffect(() => {
        setIsAllChecked(
            listData.list?.every(({ checked }: cartItemType) => checked),
        );
        setCountSelected(
            listData.list?.filter(({ checked }: cartItemType) => checked)
                .length,
        );
    }, [listData.list]);

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
                <p className="text-center text-gray400">{'선택삭제'}</p>
            </div>
            <ul className={'flex flex-wrap'}>
                {listData.count > 0 ? (
                    listData.list.map((item: cartItemType, i: number) => (
                        <CartItem key={i} {...item} />
                    ))
                ) : (
                    <p>{'장바구니가 비어 있습니다.'}</p>
                )}
            </ul>
        </>
    );
}
