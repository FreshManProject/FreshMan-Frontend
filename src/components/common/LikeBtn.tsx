import { PiHeart, PiHeartFill } from 'react-icons/pi';

interface ILikeBtnProps {
    size?: 'm' | 'lg';
    isClicked: boolean;
    handleClickLike: () => void;
}

export default function LikeBtn({
    size,
    isClicked,
    handleClickLike,
}: ILikeBtnProps) {
    const btnSize = {
        m: 'h-6 w-6',
        lg: '',
    };

    return (
        <button onClick={handleClickLike} type={'button'}>
            {isClicked ? (
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
}
