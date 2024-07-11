import { create } from 'zustand';

interface IBottomSheetState {
    isOpen: {
        bg: boolean;
        bottomSheet: boolean;
    };
    setIsOpenBottomSheet: (value: boolean) => void;
    setIsOpenBg: (value: boolean) => void;
}

function bottomSheetStore() {
    return create<IBottomSheetState>((set) => ({
        isOpen: {
            bg: false,
            bottomSheet: false,
        },
        setIsOpenBottomSheet: (value: boolean) =>
            set((state) => ({
                isOpen: {
                    ...state.isOpen,
                    bottomSheet: value,
                },
            })),
        setIsOpenBg: (value: boolean) =>
            set((state) => ({
                isOpen: {
                    ...state.isOpen,
                    bg: value,
                },
            })),
    }));
}

const useBottomSheetStore = bottomSheetStore();

export default useBottomSheetStore;
