import { FilterContainer } from '@/components/FixedFilter';
import { ProductList } from '@/components/Product';

const ProductPage = () => {
    return (
        <div>
            {/* <TopHeader>ddd</TopHeader> */}
            <FilterContainer />
            <ProductList />
        </div>
    );
};

export default ProductPage;
