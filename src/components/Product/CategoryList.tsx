import { useParams, useSearchParams } from 'react-router-dom';
import { useGetInfiniteProductList } from '@/hooks/query/product';
// import ProductList from './ProductList';

export default function CategoryList() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const sort = searchParams.get('sort') ?? 'newest';
    const { data: productList } = useGetInfiniteProductList(
        { categorySeq: Number(id), lowPrice, highPrice, sort },
        true,
    );
    console.log(productList);
    if (!productList)
        return <div className="text-gray400">해당 상품이 없습니다.</div>;

    // return <ProductList listData={productList} size="m" />;
}
