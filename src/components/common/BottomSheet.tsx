import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import useBottomSheet from '@/hooks/BottomSheet/useBottomSheet';
import { useBottomSheetStore } from '@/store/useBottomSheetStore';

interface IBottomSheetProps {
    isOpen: boolean;
    children: ReactNode;
}

export default function BottomSheet({ children, isOpen }: IBottomSheetProps) {
    const { onDragEnd, controls, handleOpenBottomSheet } = useBottomSheet();
    const {
        setIsOpenBg,
        isOpen: { bottomSheet },
    } = useBottomSheetStore();

    useEffect(() => {
        if (isOpen) {
            handleOpenBottomSheet();
            // setIsOpenBg(true);
        }
    }, [isOpen, handleOpenBottomSheet, setIsOpenBg]);

    return (
        <div
            className={`${bottomSheet && 'fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-30'}`}
        >
            <motion.div
                className={
                    'fixed bottom-0 left-0 right-0 z-10 h-[50vh] rounded-l-lg rounded-r-lg bg-white'
                }
                drag={'y'}
                initial={'hidden'}
                onDragEnd={onDragEnd}
                animate={controls!}
                transition={{
                    type: 'spring',
                    damping: 40,
                    stiffness: 400,
                }}
                variants={{
                    visible: { y: 0 },
                    hidden: { y: '100%' },
                }}
                dragConstraints={{ top: 0 }}
                dragElastic={0.2}
            >
                <span
                    className={
                        'm-auto mt-2 block h-[3px] w-20 rounded bg-gray300'
                    }
                />
                <div className={'px-4 py-6'}>
                    <div>{children}</div>
                </div>
            </motion.div>
        </div>
    );
}
