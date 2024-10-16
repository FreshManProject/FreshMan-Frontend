import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';

interface ITopHeaderProps {
    children: string;
}

const TopHeader = ({ children }: ITopHeaderProps) => {
    return (
        <header className="flex items-center px-2">
            <button
                type="button"
                className="flex h-8 w-8 items-center justify-center"
            >
                <IoArrowBackOutline className="h-2/3 w-2/3" />
                <span className="sr-only">뒤로가기</span>
            </button>
            <h1 className="text-title3_b font-sans">{children}</h1>
            <div>
                <button
                    type="button"
                    className="relative flex h-7 w-7 items-center justify-center"
                >
                    <HiOutlineShoppingBag className="h-3/4 w-3/4" />
                    <span className="text-body5_b absolute -right-[2px] top-[2px] flex h-4 w-4 items-center justify-center rounded-full bg-[var(--pointRed)] text-white">
                        99
                    </span>
                </button>
            </div>
        </header>
    );
};

export default TopHeader;
