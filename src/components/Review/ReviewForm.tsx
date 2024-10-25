import { PrimaryBkButton } from '@/components/common/Button';
import Star from '@/components/Review/Star';
import useUploadPhoto from '@/hooks/useUploadPhoto';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePostReview } from '@/hooks/query/review';
import { reviewSchema } from '@/types/Validation/yupRegister';
import { useReviewStore } from '@/store/review';
import { useSearchParams } from 'react-router-dom';
import UploadPhoto from '../common/UploadPhoto';

export default function ReviewForm() {
    const [params] = useSearchParams();
    const productSeq = params.get('id');
    const {
        file,
        previewImage,
        handleImageUpload,
        handleImageRemove,
        // inputFileRef,
    } = useUploadPhoto();
    const { rating } = useReviewStore();
    const {
        register,
        handleSubmit,
        // setValue,
        formState: { isValid },
    } = useForm({
        resolver: yupResolver(reviewSchema),
        defaultValues: {
            content: '',
            score: 0,
        },
    });
    const { mutatePostReview } = usePostReview();

    const onSubmit = async (data: { content: string }) => {
        const formdata = new FormData();
        formdata.append('score', String(rating));
        formdata.append('productSeq', String(productSeq));
        formdata.append('content', data.content);
        if (file) formdata.append('image', file);
        mutatePostReview({
            body: formdata,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex flex-col items-center border-b border-gray100 px-4 py-8">
                <p className="mb-3 text-center text-title3_b">
                    상품은 만족하셨나요?
                </p>
                <Star w="w-10" h="h-10" readonly={false} />
            </section>
            <section className="px-4 py-8">
                <textarea
                    id="reviewText"
                    {...register('content')}
                    maxLength={500}
                    placeholder="최소 20자이상 입력해주세요."
                    className="h-60 w-full rounded-lg bg-gray100 p-4 placeholder:text-gray400"
                />
                <div className="mt-4">
                    <UploadPhoto
                        register={register}
                        // ref={inputFileRef}
                        previewImage={previewImage}
                        handleImageUpload={handleImageUpload}
                        handleImageRemove={handleImageRemove}
                    />
                </div>
            </section>
            <div className="px-4 pb-10 [&>button]:w-full">
                <PrimaryBkButton
                    type="submit"
                    disabled={!isValid || !(rating > 0)}
                >
                    등록
                </PrimaryBkButton>
            </div>
        </form>
    );
}
