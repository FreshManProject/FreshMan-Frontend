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
                'border-gray200 flex items-center justify-center gap-1 rounded-lg border px-3 py-1 text-body1'
            }
        >
            {children}
            <IoIosArrowDown color={'text-bk'} />
        </button>
    );
}
