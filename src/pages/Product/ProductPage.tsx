import { FilterContainer } from '@/components/FixedFilter';
import { ProductList } from '@/components/Product';
import { TopHeader } from '@/components/common';

export default function ProductPage() {
    return (
        <>
            <TopHeader title="베이스" />
            <FilterContainer />
            <ProductList />
        </>
    );
}
