import { filterType } from '@/types/Product/productList';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IFilterItemStateType<T> {
    checked: boolean;
    name: string;
    data: T;
}
type SortStateType = IFilterItemStateType<{ id: number }>;
type PriceStateType = IFilterItemStateType<{ value: string }>;
type CategoryStateType = IFilterItemStateType<{ id: number }>;

interface IfilterItem {
    sort: SortStateType;
    price: PriceStateType;
    category: CategoryStateType;
}

interface IFilterState {
    filters: IfilterItem;
    setFilterState: (
        filterName: filterType,
        filter: SortStateType | PriceStateType | CategoryStateType,
    ) => void;
}

export const useFilterStore = create<IFilterState>()(
    persist(
        (set) => ({
            filters: {
                sort: {
                    checked: false,
                    name: 'sort',
                    data: { id: -1 },
                },
                price: {
                    checked: false,
                    name: 'price',
                    data: { value: '가격' },
                },
                category: {
                    checked: false,
                    name: 'category',
                    data: { id: -1 },
                },
            },
            setFilterState: (
                filterName: filterType,
                filter: SortStateType | PriceStateType | CategoryStateType,
            ) =>
                set((state) => ({
                    filters: { ...state.filters, [filterName]: filter },
                })),
        }),
        {
            name: 'filterStorage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
