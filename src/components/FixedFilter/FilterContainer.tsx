import { BottomSheet } from '@/components/common';
import { useBottomSheetStore } from '@/store/useBottomSheetStore';
import FilterList from './FilterList';
import { Price } from '../Product/Filter';
import { GrayBorderButton, PrimaryBkButton } from '../common/Button';

export default function FilterContainer() {
    const { isOpen } = useBottomSheetStore();
    const handleClickGotoProduct = () => {};
    return (
        <>
            <div className={`sticky top-0 z-[21] bg-white p-4`}>
                <FilterList />
            </div>
            <BottomSheet isOpen={isOpen.bottomSheet}>
                <h3 className="text-title3_b">가격</h3>
                <Price />
                <div className="fixed bottom-0 left-0 flex w-full gap-2 bg-white p-10 px-4 [&>button:last-child]:flex-1">
                    <GrayBorderButton>초기화</GrayBorderButton>
                    <PrimaryBkButton handleClick={handleClickGotoProduct}>
                        상품보기
                    </PrimaryBkButton>
                </div>
            </BottomSheet>
        </>
    );
}
