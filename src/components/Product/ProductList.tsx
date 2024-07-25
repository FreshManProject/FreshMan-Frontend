import useGetProductList from '@/hooks/query/product/useGetProductList';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';

export default function ProductList() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const sort = searchParams.get('sort') ?? 'newest';
    const { productList } = useGetProductList(
        { categorySeq: Number(id), lowPrice, highPrice, sort },
        true,
    );

    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {productList?.list.map((item) => (
                <ProductItem key={item.productSeq} id={item.productSeq} />
            ))}
        </ul>
    );
}
