import { FilterContainer } from '@/components/FixedFilter';
import { ProductList } from '@/components/Product';
import { BottomSheet, TopHeader } from '@/components/common';
import { useBottomSheetStore } from '@/store/useBottomSheetStore';

export default function ProductPage() {
    const { setIsOpenBottomSheet, isOpen } = useBottomSheetStore();

    const handleClick = () => {
        setIsOpenBottomSheet(true);
    };

    return (
        <div>
            <TopHeader title="베이스" />
            <BottomSheet isOpen={isOpen.bottomSheet}>{'ddddd'}</BottomSheet>
            {/* <TopHeader>ddd</TopHeader> */}
            <FilterContainer />
            <ProductList />
            <button type={'button'} onClick={handleClick}>
                {'여기를 클릭'}
            </button>
        </div>
    );
}
