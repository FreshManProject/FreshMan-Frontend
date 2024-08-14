import { Button } from '@/components/ui/button';
// import { ProductOptionType } from '@/types/Product/productDetail';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

// interface IOptionCountItemProps {
//     selectedItem: ProductOptionType;
// }

export default function CartOptionCount() {
    const [count, setCount] = useState(0);

    // const changeListInCount = () => {
    //     // const changeItem = selectedList.filter((item) => item.id === id)[0];
    //     // changeItem.count = count;
    //     // const newSelectedList = selectedList.map((item) => {
    //     //     if (item.id === changeItem.id) {
    //     //         return changeItem;
    //     //     }
    //     //     return item;
    //     // });
    //     // setSelectedList(id);
    // };

    const handleAddCount = () => {
        setCount((prevCount) => prevCount + 1);
        // changeListInCount();
    };

    const handleMinusCount = () => {
        setCount((prevCount) => {
            return prevCount > 1 ? prevCount - 1 : prevCount;
        });
        // changeListInCount();
    };

    return (
        <div className="mt-2 flex justify-between overflow-hidden pb-6 pt-3">
            <div className={'flex h-9 items-center'}>
                <Button
                    variant={'outline'}
                    className={'h-full rounded-none'}
                    data-count={'add'}
                    onClick={handleMinusCount}
                >
                    <FaMinus />
                </Button>
                <input
                    type={'number'}
                    value={count}
                    readOnly
                    className={
                        'gray-200 h-full w-9 border border-l-0 border-r-0 text-center text-body2_b'
                    }
                />
                <Button
                    variant={'outline'}
                    className={'h-full rounded-none'}
                    data-count={'minus'}
                    onClick={handleAddCount}
                >
                    <FaPlus className={'text-sm'} />
                </Button>
            </div>
            <p className={'text-body1'}>{'10,000원'}</p>
        </div>
    );
}
