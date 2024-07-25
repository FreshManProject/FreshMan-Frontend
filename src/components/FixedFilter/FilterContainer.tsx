import { useState } from 'react';
import { filterStateType } from '@/types/Product/productList';
import FilterBottomSheet, { FilterBottomSheetRoot } from './FilterBottomSheet';
import SortBottomSheetContent from './SortBottomSheetContent';

export default function FilterContainer() {
    const [filters, setFilters] = useState<filterStateType>({
        price: false,
        sort: false,
    });
    const toggleFilter = (filterName: 'sort' | 'price', open: boolean) => {
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
                    <SortBottomSheetContent toggleFilter={toggleFilter} />
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
                        isOpenFilter={filters.price}
                        toggleFilter={toggleFilter}
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
