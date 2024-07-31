import usePostReview from '@/hooks/query/review/usePostReview';
import { useRef, useState } from 'react';

export default function useSubmitReview() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [reviewText, setReviewText] = useState('');
    const { mutatePostReview } = usePostReview();

    const handleSubmit = () => {
        // console.log(reviewText);
        mutatePostReview({
            productSeq: 1,
            content: reviewText,
            score: 5,
            type: 'N',
        });
    };

    const handleChangeText = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setReviewText(event.target.value);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        console.log(e.target.files[0]);
    };

    return {
        reviewText,
        handleChangeText,
        handleSubmit,
        handleImageUpload,
        inputFileRef,
    };
}
