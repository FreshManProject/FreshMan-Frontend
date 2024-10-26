import { create } from 'zustand';

interface IReviewState {
    rating: number;
    imagePath: string;
    isModalOpen: boolean;
    openModal: (path: string) => void;
    closeModal: () => void;
    setReviewRating: (value: number) => void;
}

export const useReviewStore = create<IReviewState>((set) => ({
    rating: 0,
    imagePath: '',
    isModalOpen: false,
    openModal: (path) => set({ isModalOpen: true, imagePath: path }),
    closeModal: () => set({ isModalOpen: false, imagePath: '' }),
    setReviewRating: (data: number) =>
        set((state) => ({ ...state, rating: data })),
}));
