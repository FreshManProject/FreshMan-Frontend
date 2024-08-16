import { useGetSearch } from '@/hooks/query/search';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../Product';
import { FilterContainer } from '../FixedFilter';
import SearchInput from './SearchInput';

export default function SearchResultList() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') ?? '';
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const sort = searchParams.get('sort') ?? 'newest';

    const { searchResult } = useGetSearch({
        keyword,
        lowPrice,
        highPrice,
        sort,
    });

    if (!searchResult) return <div>노 리절트</div>;

    return (
        <>
            <SearchInput result />
            <FilterContainer />
            <ProductList listData={searchResult} size="m" />
        </>
    );
}
