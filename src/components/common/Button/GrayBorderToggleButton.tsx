import { IoIosArrowDown } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

interface IGrayBorderToggleButtonProps {
    children: string;
    onClick?: () => void;
    close: boolean;
}

export default function GrayBorderToggleButton({
    children,
    onClick,
    close,
}: IGrayBorderToggleButtonProps) {
    return (
        <button
            type={'button'}
            onClick={onClick}
            className={
                'flex items-center justify-center gap-1 rounded-lg border border-gray200 px-3 py-1 text-body2'
            }
        >
            {children}

            {close ? (
                <IoCloseOutline className="text-bk" />
            ) : (
                <IoIosArrowDown color={'text-bk'} />
            )}
        </button>
    );
}
