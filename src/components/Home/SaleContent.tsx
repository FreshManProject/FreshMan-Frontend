import { useGetProductSaleList } from '@/hooks/query/product';
import ProductInfiniteList from '../Product/ProductInfiniteList';
import { ProductItem } from '../Product';

export default function SaleContent() {
    const result = useGetProductSaleList();

    return (
        <ProductInfiniteList result={result}>
            {(item) => (
                <ProductItem key={item.productSeq} {...item} size={'m'} />
            )}
        </ProductInfiniteList>
    );
}
