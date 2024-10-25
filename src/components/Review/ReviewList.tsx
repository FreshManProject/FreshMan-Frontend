import { useMemo } from 'react';
import useView from '@/hooks/observer/useView';
import { reviewListType } from '@/types/Review/userReview';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import ReviewItem from './ReviewItem';

interface Props {
    reviewData: UseInfiniteQueryResult<
        InfiniteData<reviewListType, unknown>,
        Error
    >;
}

export default function ReviewList({ reviewData }: Props) {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = reviewData;

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );

    const reviewList = useMemo(() => {
        return data?.pages.flatMap((listData) => listData.list) || [];
    }, [data]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    return (
        <ul className="flex flex-col gap-9">
            {reviewList.length === 0 ? (
                <p className="text-center text-sm text-gray400">
                    등록된 리뷰가 없습니다.
                </p>
            ) : (
                reviewList.map((item, index) => (
                    <ReviewItem key={index} {...item} />
                ))
            )}
            {view ? <p>Loading more...</p> : <div ref={onView} />}
        </ul>
    );
}
