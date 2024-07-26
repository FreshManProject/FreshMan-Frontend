import { IoIosArrowDown } from 'react-icons/io';

interface IGrayBorderToggleButtonProps {
    children: string;
}

export default function GrayBorderToggleButton({
    children,
}: IGrayBorderToggleButtonProps) {
    return (
        <button
            type={'button'}
            className={
                'flex items-center justify-center gap-1 rounded-lg border border-gray200 px-3 py-1 text-body2'
            }
        >
            {children}
            <IoIosArrowDown color={'text-bk'} />
        </button>
    );
}
