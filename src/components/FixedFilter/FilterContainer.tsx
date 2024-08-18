import { useState } from 'react';
import { filterStateType, filterType } from '@/types/Product/productList';
import { SortBottomSheetContent } from '../common';
import PriceBottomSheet, { PriceBottomSheetRoot } from './PriceBottomSheet';
import { SortBottomSheetRoot } from '../common/SortBottomSheetContent';

export default function FilterContainer() {
    const [filters, setFilters] = useState<filterStateType>({
        price: false,
        sort: false,
        category: false,
    });

    const toggleFilter = (filterName: filterType, open: boolean) => {
        setFilters((prevFilter) => ({
            ...prevFilter,
            [filterName]: open,
        }));
    };

    const filterList = [
        {
            id: 1,
            // name: '최신순',
            component: (
                <SortBottomSheetRoot
                    open={filters.sort}
                    onOpenChange={(open) => toggleFilter('sort', open)}
                >
                    <SortBottomSheetContent
                        toggleFilter={toggleFilter}
                        filterName="sort"
                    />
                </SortBottomSheetRoot>
            ),
        },
        {
            id: 2,
            name: '가격',
            component: (
                <PriceBottomSheetRoot
                    open={filters.price}
                    onOpenChange={(open) => toggleFilter('price', open)}
                >
                    <PriceBottomSheet
                        toggleFilter={toggleFilter}
                        filterName="price"
                        isOpenFilter={filters.price}
                    />
                </PriceBottomSheetRoot>
            ),
        },
        {
            id: 3,
            name: '카테고리',
            component: (
                <SortBottomSheetRoot
                    open={filters.category}
                    onOpenChange={(open) => toggleFilter('category', open)}
                >
                    <SortBottomSheetContent
                        toggleFilter={toggleFilter}
                        filterName="category"
                    />
                </SortBottomSheetRoot>
            ),
        },
    ];

    return (
        <div className={`sticky top-0 z-[21] bg-white p-4`}>
            <ul className={'flex gap-2.5'}>
                {filterList.map((item) => (
                    <li key={item.id}>{item.component}</li>
                ))}
            </ul>
        </div>
    );
}
