import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import useBottomSheet from '@/hooks/BottomSheet/useBottomSheet';

interface IBottomSheetProps {
    isOpen: boolean;
    children: ReactNode;
}

const BottomSheet = ({ children, isOpen }: IBottomSheetProps) => {
    const { onDragEnd, controls, handleOpenBottomSheet } = useBottomSheet();

    useEffect(() => {
        if (isOpen) handleOpenBottomSheet();
    }, [isOpen]);

    return (
        <motion.div
            className="top-20vh fixed left-0 right-0 top-[20vh] z-10 h-screen rounded-l-lg rounded-r-lg bg-white"
            drag="y"
            initial="hidden"
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
            <div>
                <span className="m-auto block h-1 w-8 rounded bg-gray400" />
                <div>{children}</div>
            </div>
        </motion.div>
    );
};

export default BottomSheet;
