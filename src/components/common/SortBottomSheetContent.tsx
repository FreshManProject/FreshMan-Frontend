import {
    Drawer,
    DrawerContent,
    DrawerPortal,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { filterITemType, filterType } from '@/types/Product/productList';
import { filterWithCategryData, filterWithSortData } from '@/data';
import { useFilterStore } from '@/store/filter';
import { FilterBtn } from '../FixedFilter';

interface ISortBottomSheetContentProps {
    filterName: filterType;
    toggleFilter: (filterName: filterType, open: boolean) => void;
}
export default function SortBottomSheetContent({
    filterName,
    toggleFilter,
}: ISortBottomSheetContentProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const [filterList, setFilterList] = useState<{
        sort: filterITemType[];
        category: filterITemType[];
    }>({
        sort: filterWithSortData,
        category: filterWithCategryData,
    });
    const currentFilter = filterList[filterName as keyof typeof filterList];
    const [currentFilterItem, setCurrentFilterItem] = useState(1);

    const { setFilterState, filters } = useFilterStore();
    const handleFilterChange = (
        id: number,
        checked: boolean,
        filterName: filterType,
    ) => {
        setFilterList((prevSort) => {
            return {
                ...prevSort,
                [filterName]: currentFilter.map((item) =>
                    item.id === id
                        ? { ...item, checked }
                        : { ...item, checked: false },
                ),
            };
        });
    };

    const handleCheckedChange = (
        id: number,
        checked: boolean,
        filterName: filterType,
    ) => {
        toggleFilter(filterName, false);
        const selectedFilter = filters[filterName];

        handleFilterChange(id, checked, filterName);

        // 상태저장
        setFilterState(selectedFilter.name as filterType, {
            checked,
            name: filterName,
            data: { id },
        });

        const params = new URLSearchParams(location.search);

        params.set(filterName, currentFilter[id - 1].value);
        setCurrentFilterItem(id);
        navigate(`${location.pathname}?${params.toString()}`);
    };

    console.log(filters);
    useEffect(() => {
        // 상태 리셋
        // return () => {
        //     setCategory({ checked: false, data: { id: -1 } });
        //     setSort({ checked: false, data: { id: -1 } });
        // };
    }, []);
    return (
        <>
            <DrawerTrigger>
                <FilterBtn
                    close={false}
                    active={filters[filterName].checked}
                    filterName={currentFilter[currentFilterItem - 1].name}
                />
            </DrawerTrigger>
            <DrawerPortal>
                <DrawerContent className="bg-white px-4">
                    <div className="py-8">
                        <ul>
                            {currentFilter.map((item) => (
                                <li
                                    className="flex justify-between border-b border-gray200 py-5 first:pt-0"
                                    key={item.id}
                                >
                                    <Label
                                        htmlFor={`sort-${item.id}`}
                                        className={`text-body2 ${item.checked ? 'text-bk' : 'text-gray400'} w-full peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                                    >
                                        {item.name}
                                    </Label>

                                    <Checkbox
                                        checked={item.checked}
                                        id={`sort-${item.id}`}
                                        className="border-0 data-[state=checked]:border-0 data-[state=checked]:bg-white"
                                        onCheckedChange={(checked) =>
                                            handleCheckedChange(
                                                item.id,
                                                checked as boolean,
                                                filterName,
                                            )
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </DrawerContent>
            </DrawerPortal>
        </>
    );
}

export const SortBottomSheetRoot = Drawer;
