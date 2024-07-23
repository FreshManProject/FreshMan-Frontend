import { GrayBorderToggleButton } from '../common/Button';

interface IFilterItemProps {
    onIsActiveBottomSheet: () => void;
}
export default function FilterItem({
    onIsActiveBottomSheet,
}: IFilterItemProps) {
    return (
        <li onClick={onIsActiveBottomSheet} onKeyDown={onIsActiveBottomSheet}>
            <GrayBorderToggleButton>{'베이스'}</GrayBorderToggleButton>
        </li>
    );
}
