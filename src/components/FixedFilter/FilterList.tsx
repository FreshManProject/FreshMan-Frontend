import { useBottomSheetStore } from '@/store/useBottomSheetStore';
import FilterItem from './FilterItem';

export default function FilterList() {
    const { setIsOpenBottomSheet } = useBottomSheetStore();
    const handleIsActiveBottomSheet = () => {
        setIsOpenBottomSheet(true);
    };

    return (
        <ul className={'flex gap-2.5'}>
            <FilterItem onIsActiveBottomSheet={handleIsActiveBottomSheet} />
        </ul>
    );
}
