import { useBottomSheetStore } from '@/store/useBottomSheetStore';
import { LikeBtn } from '../common';
import { PrimaryBkButton } from '../common/Button';
import ProductOption from './ProductOption';

export default function ProductBuyBtn() {
    const { setIsOpenBottomSheet, isOpen } = useBottomSheetStore();

    const handleClick = () => {
        setIsOpenBottomSheet(true);
    };

    return (
        <div
            className={
                'fixed bottom-0 z-[21] flex w-full items-center justify-between bg-white px-2 py-4 shadow-top [&>#likeBtn]:basis-16 [&>#primaryBtn]:flex-1'
            }
        >
            <LikeBtn favorite={false} size={'lg'} />
            <PrimaryBkButton primary handleClick={handleClick}>
                {'구매하기'}
            </PrimaryBkButton>
            <ProductOption isOpen={isOpen} />
        </div>
    );
}
