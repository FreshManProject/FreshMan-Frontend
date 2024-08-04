import { useParams, useSearchParams } from 'react-router-dom';
import { useGetProductList } from '@/hooks/query/product';
import ProductList from './ProductList';

export default function CategoryList() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const sort = searchParams.get('sort') ?? 'newest';
    const { productList } = useGetProductList(
        { categorySeq: Number(id), lowPrice, highPrice, sort },
        true,
    );

    if (!productList) return <div>리스트가 없습니다.</div>;

    return <ProductList listData={productList} size="m" />;
}
