import { FilterContainer } from '@/components/FixedFilter';
import { CategoryList } from '@/components/Product';
import { TopHeader } from '@/components/common';

export default function ProductPage() {
    return (
        <>
            <TopHeader>
                <TopHeader.Back backUrl="/" />
                {/* TODO: 카테고리 가져오기; */}
                <TopHeader.Title title={''} />
                <TopHeader.Util cart />
            </TopHeader>
            <FilterContainer showCategory />
            <CategoryList />
        </>
    );
}
