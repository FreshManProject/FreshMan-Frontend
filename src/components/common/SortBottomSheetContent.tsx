import { DrawerContent, DrawerPortal } from '@/components/ui/drawer';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SortITemType, filterType } from '@/types/Product/productList';
import { FilterBottomSheetTrigger } from '../FixedFilter/FilterBottomSheet';
import { GrayBorderToggleButton } from './Button';

interface ISortBottomSheetContentProps {
    filterName: filterType;
    toggleFilter: (filterName: filterType, open: boolean) => void;
    sortList: SortITemType[];
    onSortChange: (id: number, checked: boolean) => void;
}
export default function SortBottomSheetContent({
    filterName,
    toggleFilter,
    sortList,
    onSortChange,
}: ISortBottomSheetContentProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const [currentSortItem, setCurrentSortItem] = useState(1);

    const handleCheckedChange = (id: number, checked: boolean) => {
        toggleFilter(filterName, false);

        onSortChange(id, checked);

        const params = new URLSearchParams(location.search);
        params.set(filterName, sortList[id - 1].value);
        setCurrentSortItem(id);
        navigate(`${location.pathname}?${params.toString()}`);
    };

    return (
        <>
            <FilterBottomSheetTrigger>
                <GrayBorderToggleButton close={false}>
                    {sortList[currentSortItem - 1].name}
                </GrayBorderToggleButton>
            </FilterBottomSheetTrigger>
            <DrawerPortal>
                <DrawerContent className="bg-white px-4">
                    <div className="py-8">
                        <ul>
                            {sortList.map((item) => (
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
