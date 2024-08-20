import { useGetProductRankingList } from '@/hooks/query/product';
import ProductInfiniteList from '../Product/ProductInfiniteList';
import { ProductItem } from '../Product';

export default function RankingContent() {
    const result = useGetProductRankingList('option');

    return (
        <ProductInfiniteList result={result}>
            {(item) => (
                <ProductItem key={item.productSeq} {...item} size={'m'} />
            )}
        </ProductInfiniteList>
    );
}
