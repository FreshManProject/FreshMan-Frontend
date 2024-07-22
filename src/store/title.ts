import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ITitleState {
    title: string;
    setTitle: (value: string) => void;
}

export const useTitleStore = create(
    persist<ITitleState>(
        (set) => ({
            title: '',
            setTitle: (data: string) =>
                set((state) => ({ ...state, name: data })),
        }),
        {
            name: 'titleStorage',
        },
    ),
);
