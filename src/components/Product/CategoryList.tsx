import { useParams, useSearchParams } from 'react-router-dom';
import { useGetInfiniteProductList } from '@/hooks/query/product';
import useView from '@/hooks/observer/useView';
import ProductList from './ProductList';

export default function CategoryList() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const sort = searchParams.get('sort') ?? 'newest';

    const {
        data: productList,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useGetInfiniteProductList(
        { categorySeq: Number(id), lowPrice, highPrice, sort },
        true,
    );

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );
    if (!productList)
        return <div className="text-gray400">해당 상품이 없습니다.</div>;

    const list = productList.pages.flatMap((listData) => listData.list) || [];
    return (
        <>
            <ProductList listData={list} size="m" />
            {view ? <p>Loading more...</p> : <div ref={onView} />}
        </>
    );
}
