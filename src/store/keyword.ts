import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IKeywordState {
    keywordList: string[];
    setInsertKeywordList: (data: string) => void;
    setRemoveKeywordList: (keywordNumber: number) => void;
}

export const useKeywordStore = create<IKeywordState>()(
    persist(
        (set) => ({
            keywordList: [],
            setInsertKeywordList: (data: string) =>
                set((state) => {
                    const { keywordList } = state;
                    const newKeywordList = [data, ...keywordList.slice(0, 9)];

                    return {
                        ...state,
                        keywordList: newKeywordList,
                    };
                }),
            setRemoveKeywordList: (keywordNumber: number) =>
                set((state) => ({
                    ...state,
                    keywordList: state.keywordList.filter(
                        (_, index) => index !== keywordNumber,
                    ),
                })),
        }),
        {
            name: 'keywordStorage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
