import { useState } from 'react';

const useIsOpenBottomSheet = () => {
    const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);

    return {
        isOpenBottomSheet,
        setIsOpenBottomSheet,
    };
};

export default useIsOpenBottomSheet;
