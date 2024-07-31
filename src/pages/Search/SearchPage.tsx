import SearchInput from '@/components/common/SearchInput';
import { useEffect, useState } from 'react';
import { productItemType } from '@/types/Product/productList';
import ProductItem from '@/components/Product/ProductItem';
import useGetQuerySearch from '@/hooks/query/search/useGetQuerySearch';
import RecentSearchList from '@/components/search/RecentSearchList';

export default function SearchPage() {
    const [query, setQuery] = useState<string>('');
    const categories = ['전체', '베이스', '향수', '립스틱'];
    const [categorySeq, setCategorySeq] = useState<number>(0);
    const [enableSearch, setEnableSearch] = useState<boolean>(false);

    const { querySearchResult, isLoadingQuerySearchResult } = useGetQuerySearch(
        enableSearch,
        query,
        categorySeq,
    );
    useEffect(() => {
        if (enableSearch) {
            setEnableSearch(false); // 쿼리가 실행된 후 enableSearch를 false로 설정
        }
    }, [querySearchResult, enableSearch]);

    const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearchOption = (index: number) => {
        setCategorySeq(index);
    };

    const handleCancel = () => {
        setQuery('');
    };

    const handleQuerySearch = async (
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === 'Enter') setEnableSearch(true);
    };

    return (
        <div className="my-6 w-[375px]">
            <div className="mb-12 flex flex-row justify-center">
                <SearchInput
                    query={query}
                    options={categories}
                    optionIndex={categorySeq}
                    handleQuery={handleQuery}
                    handleQuerySearch={handleQuerySearch}
                    handleSearchOption={handleSearchOption}
                    handleCancel={handleCancel}
                />
            </div>

            {!isLoadingQuerySearchResult &&
            querySearchResult &&
            querySearchResult.length > 0 ? (
                <div className="mx-4 flex flex-wrap">
                    {querySearchResult.map(
                        (search: productItemType, index: number) => (
                            <ProductItem
                                key={index}
                                size="m"
                                productSeq={search.productSeq}
                                name={search.name}
                                brand={search.brand}
                                price={search.price}
                                image={search.image}
                                sale={search.sale}
                                favorite={search.favorite}
                            />
                        ),
                    )}
                </div>
            ) : (
                <RecentSearchList />
            )}
        </div>
    );
}
