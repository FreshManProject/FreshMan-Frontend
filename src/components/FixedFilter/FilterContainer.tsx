import { useState } from 'react';
import {
    SortITemType,
    filterStateType,
    filterType,
} from '@/types/Product/productList';
import FilterBottomSheet, { FilterBottomSheetRoot } from './FilterBottomSheet';
import { SortBottomSheetContent } from '../common';

export default function FilterContainer() {
    const [filters, setFilters] = useState<filterStateType>({
        price: false,
        sort: false,
    });

    const [sortList, setSortList] = useState<SortITemType[]>([
        {
            id: 1,
            name: '최신순',
            value: 'newest',
            checked: true,
        },
        {
            id: 2,
            name: '높은 가격순',
            value: 'highest',
            checked: false,
        },
        {
            id: 3,
            name: '낮은 가격순',
            value: 'lowest',
            checked: false,
        },
    ]);

    const handleSortChange = (id: number, checked: boolean) => {
        setSortList((prevSort) => {
            return prevSort.map((item) => {
                return {
                    ...item,
                    checked: item.id === id ? checked : false,
                };
            });
        });
    };

    const toggleFilter = (filterName: filterType, open: boolean) => {
        setFilters((prevFilter) => ({
            ...prevFilter,
            [filterName]: open,
        }));
    };

    const categoryList = [
        {
            id: 1,
            // name: '최신순',
            component: (
                <FilterBottomSheetRoot
                    open={filters.sort}
                    onOpenChange={(open) => toggleFilter('sort', open)}
                >
                    <SortBottomSheetContent
                        toggleFilter={toggleFilter}
                        filterName="sort"
                        sortList={sortList}
                        onSortChange={handleSortChange}
                    />
                </FilterBottomSheetRoot>
            ),
        },
        {
            id: 2,
            name: '가격',
            component: (
                <FilterBottomSheetRoot
                    open={filters.price}
                    onOpenChange={(open) => toggleFilter('price', open)}
                >
                    <FilterBottomSheet
                        toggleFilter={toggleFilter}
                        filterName="price"
                        isOpenFilter={filters.price}
                    />
                </FilterBottomSheetRoot>
            ),
        },
    ];

    return (
        <div className={`sticky top-0 z-[21] bg-white p-4`}>
            <ul className={'flex gap-2.5'}>
                {categoryList.map((item) => (
                    <li key={item.id}>{item.component}</li>
                ))}
            </ul>
        </div>
    );
}
