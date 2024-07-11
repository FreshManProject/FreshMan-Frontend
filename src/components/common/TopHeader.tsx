import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';

interface ITopHeaderProps {
    children: string;
}

export default function TopHeader({ children }: ITopHeaderProps) {
    return (
        <header className={'flex items-center px-2'}>
            <button
                type={'button'}
                className={'flex h-8 w-8 items-center justify-center'}
            >
                <IoArrowBackOutline className={'h-2/3 w-2/3'} />
                <span className={'sr-only'}>{'뒤로가기'}</span>
            </button>
            <h1 className={'font-sans text-title3_b'}>{children}</h1>
            <div>
                <button
                    type={'button'}
                    className={
                        'relative flex h-7 w-7 items-center justify-center'
                    }
                >
                    <HiOutlineShoppingBag className={'h-3/4 w-3/4'} />
                    <span
                        className={
                            'absolute -right-[2px] top-[2px] flex h-4 w-4 items-center justify-center rounded-full bg-[var(--pointRed)] text-body5_b text-white'
                        }
                    >
                        {'99'}
                    </span>
                </button>
            </div>
        </header>
    );
}
