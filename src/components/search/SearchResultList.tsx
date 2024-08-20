import { useGetSearch } from '@/hooks/query/search';
import { useSearchParams } from 'react-router-dom';
import { useFilterStore } from '@/store/filter';
import { ProductList } from '../Product';

export default function SearchResultList() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') ?? '';
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const categorySeq = Number(searchParams.get('categorySeq'));
    const sort = searchParams.get('sort') ?? 'newest';

    const { enableFilter } = useFilterStore();

    const { searchResult } = useGetSearch({
        params: { keyword, lowPrice, highPrice, categorySeq, sort },
        status: enableFilter,
    });

    if (!searchResult) return <div>노 리절트</div>;

    return <ProductList listData={searchResult} size="m" />;
}
