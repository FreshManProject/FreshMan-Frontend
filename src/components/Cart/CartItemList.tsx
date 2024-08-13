import { productItemType, productListType } from '@/types/Product/productList';
import { Checkbox } from '@/components/ui/checkbox';
import CartItem from './CartItem';

interface IProductListProps {
    listData: productListType;
}

export default function CartItemList({ listData }: IProductListProps) {
    return (
        <>
            <div className="flex items-center justify-between px-4 pb-2.5 pt-1 text-body3">
                <div className="flex h-8 items-center gap-2.5">
                    <Checkbox className="h-5 w-5 border-gray300 data-[state=checked]:bg-black data-[state=checked]:text-white" />
                    <p>{'전체선택 (1/12)'}</p>
                </div>
                <p className="text-center text-gray400">{'선택삭제'}</p>
            </div>
            <ul className={'flex flex-wrap'}>
                {listData && listData.list && listData.list?.length > 0 ? (
                    listData.list.map((item: productItemType) => (
                        <CartItem key={item.productSeq} {...item} />
                    ))
                ) : (
                    <p>{'장바구니가 비어 있습니다.'}</p>
                )}
            </ul>
        </>
    );
}
