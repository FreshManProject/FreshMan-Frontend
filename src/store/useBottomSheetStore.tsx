import { create } from 'zustand';

interface IBottomSheetState {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

function bottomSheetStore() {
    return create<IBottomSheetState>((set) => ({
        isOpen: false,
        setIsOpen: (value: boolean) =>
            set(() => ({
                isOpen: value,
            })),
    }));
}

const useBottomSheetStore = bottomSheetStore();

export default useBottomSheetStore;
