import useBottomSheetStore from '@/store/useBottomSheetStore';
import { PanInfo, useAnimationControls } from 'framer-motion';

const useBottomSheet = () => {
    const { setIsOpenBottomSheet } = useBottomSheetStore();
    const { body } = document;

    const controls = useAnimationControls();
    const onDragEnd = (
        e: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        const isClose =
            info?.point.y > 20 || (info?.point.y >= 0 && info.point.y > 45);

        if (isClose) {
            body.classList.remove('body-hidden');
            setIsOpenBottomSheet(false);
            controls.start('hidden');
        } else {
            body.classList.add('body-hidden');
            setIsOpenBottomSheet(true);
            controls.start('visible');
        }
    };

    const handleCloseBottomSheet = () => {
        controls.start('hidden');
        body.classList.remove('body-hidden');
    };

    const handleOpenBottomSheet = () => {
        controls.start('visible');
        body.classList.add('body-hidden');
    };

    return {
        controls,
        onDragEnd,
        handleCloseBottomSheet,
        handleOpenBottomSheet,
    };
};

export default useBottomSheet;
