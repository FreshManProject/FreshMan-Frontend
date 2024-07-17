import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface ITopHeaderProps {
    backUrl?: string;
    title?: string;
}

export default function TopHeader({ backUrl, title }: ITopHeaderProps) {
    const navigate = useNavigate();
    return (
        <div className="mt-5 flex h-10 flex-row justify-between border-b border-gray-100">
            {backUrl ? (
                <IoArrowBackOutline
                    size={24}
                    onClick={() => navigate(backUrl)}
                />
            ) : (
                <div />
            )}
            {title ? <p className="text-xl font-semibold">{title}</p> : <div />}
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
        </div>
    );
}
