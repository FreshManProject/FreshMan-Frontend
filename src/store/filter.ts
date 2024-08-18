import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IFilterItemStateType<T> {
    checked: boolean;
    name: string;
    data: T;
}

type SortType = IFilterItemStateType<{ id: number }>;
type CategoryType = IFilterItemStateType<{ id: number }>;
type PriceType = IFilterItemStateType<{ value: string }>;

interface IFilterState {
    sortState: SortType;
    priceState: PriceType;
    categroyState: CategoryType;
}

interface IfilterAllState extends IFilterState {
    setPrice: (data: PriceType) => void;
    setCategory: (data: CategoryType) => void;
    setSort: (data: SortType) => void;
}

export const useFilterStore = create<IfilterAllState>()(
    persist(
        (set) => ({
            sortState: { checked: false, name: 'sort', data: { id: -1 } },
            priceState: { checked: false, name: 'price', data: { value: '' } },
            categroyState: {
                checked: false,
                name: 'category',
                data: { id: -1 },
            },
            setPrice: (data: PriceType) =>
                set((state) => ({ ...state, priceState: data })),
            setCategory: (data: CategoryType) =>
                set((state) => ({ ...state, categroyState: data })),
            setSort: (data: SortType) =>
                set((state) => ({ ...state, sortState: data })),
        }),
        {
            name: 'filterStorage',
        },
    ),
);
