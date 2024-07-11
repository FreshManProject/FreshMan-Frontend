import { create } from 'zustand';

export default function useBottomSheetStore() {
    create(() => ({
        isOpen: false,
    }));
}
