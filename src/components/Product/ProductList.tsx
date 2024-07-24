import useGetProductList from '@/hooks/query/product/useGetProductList';
import ProductItem from './ProductItem';

export default function ProductList() {
    const { productList } = useGetProductList({ categorySeq: 2 });

    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {productList?.list.map((item) => (
                <ProductItem key={item.productSeq} id={item.productSeq} />
            ))}
        </ul>
    );
}
