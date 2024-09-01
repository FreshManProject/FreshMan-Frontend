import { useMemo, useState } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { cartListType } from '@/types/Product/productList';
import { useGetInfiniteCartList } from '@/hooks/query/carts';
import useView from '@/hooks/observer/useView';
import { Checkbox } from '@/components/ui/checkbox';
import CartItem from './CartItem';

interface ICartListProps {
    listData: cartListType;
}

export default function CartList({ listData }: ICartListProps) {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useGetInfiniteCartList();

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );

    const list = useMemo(() => {
        return data?.pages.flatMap((listData) => listData.list) || [];
    }, [data]);

    const [checkItems, setCheckItems] = useState<boolean[]>(
        new Array(list.length).fill(false),
    );
    // list.every(({ checked }: cartItemType) => checked),
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [countSelected, setCountSelected] = useState(0);

    const onAllCheckedChange = async (checked: CheckedState) => {
        const newCheckedState = !!checked;

        try {
            setIsAllChecked(newCheckedState);
            setCountSelected(newCheckedState ? listData.count : 0);
            // handlePatchCartItem(newCheckedState);
        } catch (error) {
            console.error('Failed to update cart items:', error);
            setIsAllChecked(!newCheckedState);
            setCountSelected(!newCheckedState ? listData.count : 0);
        }
    };
    const handleCheckItem = (i: number) => {
        const newChecks = [...checkItems];
        newChecks[i] = !!newChecks[i];
        setCheckItems(newChecks);
    };

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

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
                    onClick={() => {}}
                    className="text-center text-gray400"
                >
                    {'선택삭제'}
                </button>
            </div>
            <ul className={'flex flex-wrap gap-y-10'}>
                {list.map((item, i) => (
                    <CartItem
                        key={item.productSeq}
                        checked={checkItems[i]}
                        handleCheckItem={() => {
                            handleCheckItem(i);
                        }}
                        {...item}
                    />
                ))}
                {view ? <p>Loading more...</p> : <div ref={onView} />}
            </ul>
        </>
    );
}
