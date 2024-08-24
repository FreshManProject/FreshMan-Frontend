import { useMemo } from 'react';
import {
    useGetInfiniteRankingList,
    useGetProductSaleList,
} from '@/hooks/query/product';
import ProductMoreList from './ProductMoreList';

export default function HomeProductList() {
    const { data: rankingList, isError: isErrorProductRankingList } =
        useGetInfiniteRankingList('option');
    const { data: saleList, isError: isErrorProductSaleList } =
        useGetProductSaleList();

    const productRankingList = useMemo(() => {
        return (
            rankingList?.pages
                .flatMap((listData) => listData.list)
                .slice(0, 10) || []
        );
    }, [rankingList]);

    const productSaleList = useMemo(() => {
        return (
            saleList?.pages.flatMap((listData) => listData.list).slice(0, 10) ||
            []
        );
    }, [saleList]);

    if (!rankingList || !saleList) {
        return <div>Loading...</div>;
    }

    if (isErrorProductRankingList || isErrorProductSaleList)
        return <div>Error...</div>;

    return (
        <div className="flex flex-col gap-10">
            <ProductMoreList
                title="랭킹"
                link="/"
                listData={{
                    list: productRankingList,
                    count: productRankingList.length,
                }}
            />
            <ProductMoreList
                title="랭킹"
                link="/"
                listData={{
                    list: productSaleList,
                    count: productSaleList.length,
                }}
            />
        </div>
    );
}
