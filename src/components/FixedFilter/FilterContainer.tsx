import { useState } from 'react';
import { GrayBorderToggleButton } from '../common/Button';
import FilterBottomSheet, {
    FilterBottomSheetRoot,
    FilterBottomSheetTrigger,
} from './FilterBottomSheet';

export default function FilterContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const categoryList = [
        {
            id: 1,
            name: '인기순',
        },
        {
            id: 2,
            name: '가격',
            component: (
                <FilterBottomSheetRoot onOpenChange={(open) => setIsOpen(open)}>
                    <FilterBottomSheetTrigger>
                        <GrayBorderToggleButton>가격</GrayBorderToggleButton>
                    </FilterBottomSheetTrigger>
                    <FilterBottomSheet isOpen={isOpen} />
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
