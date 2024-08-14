import { Button } from '@/components/ui/button';
import { cartItemType } from '@/types/Product/productList';
import { formatNumber } from '@/util/formatData';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

export default function CartOptionCount(items: cartItemType) {
    const { price, sale } = items;
    const [count, setCount] = useState(0);

    const handleAddCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleMinusCount = () => {
        setCount((prevCount) => {
            return prevCount > 1 ? prevCount - 1 : prevCount;
        });
    };

    return (
        <div className="mt-2.5 flex h-10 items-center justify-between overflow-hidden">
            <div className="flex h-9 items-center rounded-md border text-gray400">
                <Button
                    // variant={'outline'}
                    className="h-full w-9 rounded-none"
                    data-count={'add'}
                    onClick={handleMinusCount}
                >
                    <FaMinus />
                </Button>
                <input
                    type={'number'}
                    value={count}
                    readOnly
                    className="h-full w-10 border-l border-r text-center text-body1_b"
                />
                <Button
                    // variant={'outline'}
                    className="h-full w-9 rounded-none"
                    data-count={'minus'}
                    onClick={handleAddCount}
                >
                    <FaPlus className={'text-sm'} />
                </Button>
            </div>
            <div className="flex h-full items-center gap-2.5">
                {sale ? (
                    <>
                        <p className={'text-center text-gray400 line-through'}>
                            {formatNumber(price)}원
                        </p>
                        <p className={'text-body1_b'}>
                            {`${formatNumber(sale.salePrice)}원`}
                        </p>
                    </>
                ) : (
                    <p className={'text-body1_b'}>{formatNumber(price)}원</p>
                )}
            </div>
        </div>
    );
}
