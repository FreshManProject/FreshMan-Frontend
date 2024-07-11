import { FilterContainer } from '@/components/FixedFilter';
import { ProductList } from '@/components/Product';
import { BottomSheet } from '@/components/common';
import useBottomSheetStore from '@/store/useBottomSheetStore';

export default function ProductPage() {
    const { setIsOpen, isOpen } = useBottomSheetStore();

    const handleClick = () => {
        setIsOpen(true);
        // console.log(isOpenBottomSheet, '프로덕트');
    };

    return (
        <div>
            <BottomSheet isOpen={isOpen}>{'ddddd'}</BottomSheet>
            {/* <TopHeader>ddd</TopHeader> */}
            <FilterContainer />
            <ProductList />
            <button type={'button'} onClick={handleClick}>
                {'여기를 클릭'}
            </button>
        </div>
    );
}
