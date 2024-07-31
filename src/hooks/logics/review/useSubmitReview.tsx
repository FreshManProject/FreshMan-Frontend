import { useRef, useState } from 'react';

interface reviewDataType {
    reviewText: string;
}

export default function useSubmitReview() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (data: reviewDataType) => {
        console.log(data);
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
