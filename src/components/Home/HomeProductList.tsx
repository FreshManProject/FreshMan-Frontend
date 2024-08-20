import {
    useGetProductRankingList,
    // useGetProductSaleList,
} from '@/hooks/query/product';
import ProductMoreList from './ProductMoreList';

export default function HomeProductList() {
    const { productRankingList, isErrorProductRankingList } =
        useGetProductRankingList('');
    // const { productSaleList, isErrorProductSaleList } = useGetProductSaleList();

    if (!productRankingList || !productRankingList) {
        return <div>Loading...</div>;
    }

    if (isErrorProductRankingList || isErrorProductRankingList)
        return <div>Error...</div>;

    return (
        <div className="flex flex-col gap-10">
            <ProductMoreList
                title="랭킹"
                link="/"
                listData={productRankingList}
            />
            <ProductMoreList
                title="랭킹"
                link="/"
                listData={productRankingList}
            />
        </div>
    );
}
