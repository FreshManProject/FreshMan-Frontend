import { PiHeart, PiHeartFill } from 'react-icons/pi';

interface ILikeBtnProps {
    size?: 'm' | 'lg';
    handleClickLike: () => void;
    isClick: boolean;
}

const LikeBtn = ({ size, isClick, handleClickLike }: ILikeBtnProps) => {
    const btnSize = {
        m: 'h-6 w-6',
        lg: '',
    };

    return (
        <button
            type="button"
            aria-label="찜"
            className="p-1"
            onClick={handleClickLike}
        >
            {isClick ? (
                <PiHeartFill
                    className={`text-pointRed ${size ? btnSize[size] : btnSize.m}`}
                />
            ) : (
                <PiHeart
                    className={`text-gray300 ${size ? btnSize[size] : btnSize.m}`}
                />
            )}
        </button>
    );
};

export default LikeBtn;
