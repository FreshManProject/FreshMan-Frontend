import { IoIosArrowDown } from 'react-icons/io';

interface IGrayBorderButtonProps {
    children: string;
}

export default function GrayBorderButton({ children }: IGrayBorderButtonProps) {
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
