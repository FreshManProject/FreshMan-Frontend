import { useState } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Link } from 'react-router-dom';
import { cartItemType } from '@/types/Product/productList';
import { usePatchCartItem } from '@/hooks/query/carts';
import { Checkbox } from '../ui/checkbox';
import CartOptionCount from './CartOptionCount';

interface ICartItemProps extends cartItemType {
    checked: boolean;
    handleCheckItem: () => void;
}

export default function CartItem({
    checked,
    handleCheckItem,
    ...items
}: ICartItemProps) {
    const { productSeq, name, brand, image, quantity } = items;
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const [isChecked, setIsChecked] = useState(checked);
    const { mutatePatchCartItem } = usePatchCartItem();

    const handlePatchCartItem = (newQuantity: number, newCheck: boolean) => {
        mutatePatchCartItem({
            productSeq,
            quantity: newQuantity,
            checked: newCheck,
        });
    };

    const onCheckedChange = async (check: CheckedState) => {
        const newCheckedState = !!check;
        setIsChecked(newCheckedState);
        handleCheckItem();

        try {
            handlePatchCartItem(itemQuantity, newCheckedState);
        } catch (error) {
            console.error('Failed to update cart item:', error);
            setIsChecked(!newCheckedState);
        }
    };

    const handleAddQuantity = () => {
        setItemQuantity((prevCount) => prevCount + 1);
        try {
            handlePatchCartItem(itemQuantity + 1, isChecked);
        } catch (error) {
            console.error('Failed to update cart item:', error);
            setItemQuantity(itemQuantity + 1);
        }
    };

    const handleMinusQuantity = () => {
        setItemQuantity((prevCount) => {
            return prevCount > 1 ? prevCount - 1 : prevCount;
        });
        try {
            handlePatchCartItem(itemQuantity + 1, isChecked);
        } catch (error) {
            console.error('Failed to update cart item:', error);
            setItemQuantity(itemQuantity - 1);
        }
    };

    return (
        <li className="flex w-full flex-col gap-2.5 px-4 py-3.5">
            <div className="flex justify-start gap-2.5">
                <Checkbox
                    checked={isChecked}
                    onCheckedChange={onCheckedChange}
                    className="h-5 w-5 border-gray300 data-[state=checked]:bg-black data-[state=checked]:text-white"
                />
                <Link
                    to={`/products/${productSeq}`}
                    className="block aspect-[1] h-20 min-w-20"
                >
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </Link>
                <div className={'mr-11 flex w-full flex-col gap-y-2.5 pr-2.5'}>
                    <span className="inline-flex h-5 items-end text-body3">
                        {brand}
                    </span>
                    <Link to={`/products/${productSeq}`}>
                        <p className="line-clamp-2 text-body2_b leading-tight">
                            {name}
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex max-h-40 w-full flex-col overflow-y-hidden pl-6">
                {/* // !옵션 들어갈시 추가 */}
                {/* <CartOption /> */}
                <CartOptionCount
                    itemQuantity={itemQuantity}
                    handleAddQuantity={handleAddQuantity}
                    handleMinusQuantity={handleMinusQuantity}
                    {...items}
                />
            </div>
        </li>
    );
}
