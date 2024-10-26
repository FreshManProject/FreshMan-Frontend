import { reviewProductType } from '@/types/Review/userReview';
import { useReviewStore } from '@/store/review';
import Star from './Star';

// interface Props extends reviewProductType {
//     onClick: (imagePath: string) => void;
// }
export default function ReviewItem({
    userName,
    content,
    score,
    createdAt,
    imagePath,
    // onClick,
}: reviewProductType) {
    const { openModal } = useReviewStore();
    const dateObj = new Date(...createdAt);
    const handleImageClick = (imagePath: string) => {
        openModal(imagePath);
    };
    return (
        <li className="border-t border-gray100 pt-9 text-body3 text-gray400 first:border-t-0 first:pt-0">
            <div className="flex justify-between">
                <span className="flex gap-2">
                    <Star readonly rate={score} w="w-4" h="h-4" />
                    {userName}
                </span>
                <span>{`${dateObj.getFullYear()}.${dateObj.getMonth()}.${dateObj.getDate()}`}</span>
            </div>
            {/* <p className="mt-2">{option}</p> */}
            <button
                onClick={() => handleImageClick(imagePath)}
                type="button"
                className="mt-2"
            >
                <img
                    src={imagePath}
                    className="h-[100px] w-[100px] object-cover"
                    alt={`${userName} 리뷰 이미지`}
                />
            </button>
            <p className="mt-3 text-bk">{content}</p>
        </li>
    );
}
