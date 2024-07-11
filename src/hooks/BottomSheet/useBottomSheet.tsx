import useBottomSheetStore from '@/store/useBottomSheetStore';
import { PanInfo, useAnimationControls } from 'framer-motion';

const useBottomSheet = () => {
    const { setIsOpen } = useBottomSheetStore();

    const controls = useAnimationControls();
    const onDragEnd = (
        e: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        const isClose =
            info?.point.y > 20 || (info?.point.y >= 0 && info.point.y > 45);

        if (isClose) {
            setIsOpen(false);
            controls.start('hidden');
        } else {
            setIsOpen(true);
            controls.start('visible');
        }
    };

    const handleCloseBottomSheet = () => {
        controls.start('hidden');
    };

    const handleOpenBottomSheet = () => {
        controls.start('visible');
    };

    return {
        controls,
        onDragEnd,
        handleCloseBottomSheet,
        handleOpenBottomSheet,
    };
};

export default useBottomSheet;
