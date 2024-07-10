import { FilterContainer } from '@/components/FixedFilter';
import { ProductList } from '@/components/Product';
import { BottomSheet } from '@/components/common';
import useIsOpenBottomSheet from '@/hooks/BottomSheet/useIsOpenBottomSheet';

const ProductPage = () => {
    const { isOpenBottomSheet, setIsOpenBottomSheet } = useIsOpenBottomSheet();

    const handleClick = () => {
        setIsOpenBottomSheet((prev) => !prev);
        console.log(isOpenBottomSheet, '프로덕트');
    };

    return (
        <div>
            <BottomSheet isOpen={isOpenBottomSheet}>ddddd</BottomSheet>
            {/* <TopHeader>ddd</TopHeader> */}
            <FilterContainer />
            <ProductList />
            <button type="button" onClick={handleClick}>
                여기를 클릭
            </button>
        </div>
    );
};

export default ProductPage;
