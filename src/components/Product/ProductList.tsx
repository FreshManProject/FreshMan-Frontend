import { productItemType } from '@/types/Product/productList';
import ProductItem from './ProductItem';

interface IProductListProps {
    listData: productItemType[];
    size: 's' | 'm';
}

export default function ProductList({ listData, size }: IProductListProps) {
    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {!listData.length ? (
                <li className="w-full text-center text-sm text-gray400">
                    해당 상품이 없습니다.
                </li>
            ) : (
                listData.map((item: productItemType) => (
                    <ProductItem key={item.productSeq} {...item} size={size} />
                ))
            )}
            {}
        </ul>
    );
}
