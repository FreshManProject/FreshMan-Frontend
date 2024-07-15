import useBottomSheetStore from '@/store/useBottomSheetStore';
import { BottomSheet, LikeBtn } from '../common';
import { PrimaryBkButton } from '../common/Button';

export default function ProductBuyBtn() {
    const { setIsOpenBottomSheet, isOpen } = useBottomSheetStore();

    const handleClick = () => {
        setIsOpenBottomSheet(true);
    };

    return (
        <>
            <BottomSheet isOpen={isOpen.bottomSheet}>{'ddddd'}</BottomSheet>
            <div
                className={
                    'shadow-top flex items-center justify-between bg-white px-2 py-4 [&>#likeBtn]:basis-16 [&>#primaryBtn]:flex-1'
                }
            >
                <LikeBtn size={'lg'} />
                <PrimaryBkButton primary handleClick={handleClick}>
                    {'구매하기'}
                </PrimaryBkButton>
            </div>
        </>
    );
}
