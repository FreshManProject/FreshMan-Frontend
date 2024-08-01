import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface ITopHeaderProps {
    backUrl?: string;
    redirectBack?: boolean;
    title?: string;
}

export default function TopHeader({
    backUrl,
    redirectBack,
    title,
}: ITopHeaderProps) {
    const navigate = useNavigate();
    const handleRedirectBack = () => {
        navigate(-1);
    };

    const handleBack = (backUrl: string) => {
        if (redirectBack) {
            return handleRedirectBack();
        }
        return navigate(backUrl);
    };

    return (
        <header className="align-center grid h-12 grid-cols-header items-center border-b border-gray-100 px-2">
            {backUrl ? (
                <IoArrowBackOutline
                    size={24}
                    onClick={() => handleBack(backUrl)}
                />
            ) : (
                <div />
            )}
            {title ? (
                <p className="text-center text-title3_b font-semibold">
                    {title}
                </p>
            ) : (
                <div />
            )}
            <div className="flex justify-end">
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
