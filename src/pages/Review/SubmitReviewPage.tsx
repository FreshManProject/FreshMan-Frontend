import { ReviewForm } from '@/components/Review';
import { TopHeader } from '@/components/common';
import { useProductStore } from '@/store/product';

export default function SubmitReviewPage() {
    const { name, imageList } = useProductStore();
    return (
        <div>
            <TopHeader>
                <TopHeader.Back />
                <TopHeader.Title title="리뷰쓰기" />
            </TopHeader>
            <section className="border-b border-gray100 px-4 py-5">
                <figure className="flex items-center gap-3">
                    {imageList.length > 0 && (
                        <img
                            src={imageList[0]}
                            alt={name}
                            className="h-12 w-12 object-cover"
                        />
                    )}
                    <figcaption className="line-clamp-2 text-body2">
                        {name}
                    </figcaption>
                </figure>
            </section>
            <ReviewForm />
        </div>
    );
}
