import ReviewItem from './ReviewItem';

export default function ReviewList() {
    return (
        <ul className="flex flex-col gap-9">
            {Array(5)
                .fill(null)
                .map(() => (
                    <ReviewItem />
                ))}
        </ul>
    );
}
