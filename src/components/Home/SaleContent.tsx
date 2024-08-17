import { useGetProductSaleList } from '@/hooks/query/product';
import { ProductList } from '../Product';

export default function SaleContent() {
    const { productSaleList, isErrorProductSaleList } = useGetProductSaleList();

    if (!productSaleList) return <div>Loading...</div>;

    if (isErrorProductSaleList) return <div>Error...</div>;

    return <ProductList listData={productSaleList} size={'m'} />;
}
