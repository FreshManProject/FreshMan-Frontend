import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { qnaSchema } from '@/types/Validation/yupRegister';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import useUploadPhoto from '@/hooks/useUploadPhoto';
import { usePostQnA } from '@/hooks/query/product';
import { ForwardedRef, forwardRef } from 'react';
import { GrayBorderButton, PrimaryBkButton } from '../common/Button';
import UploadPhoto from '../common/UploadPhoto';

export default function QnAForm() {
    const {
        file,
        previewImage,
        handleImageUpload,
        handleImageRemove,
        // inputFileRef,
    } = useUploadPhoto();
    const {
        register,
        handleSubmit,
        watch,
        // setValue,
        control,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(qnaSchema),
        defaultValues: {
            content: '',
        },
    });
    const { mutatePostQnA } = usePostQnA();

    const content = watch('content', '');

    const onSubmit = async (data: { type: string; content: string }) => {
        const formdata = new FormData();
        formdata.append('type', data.type);
        formdata.append('content', data.content);
        if (file) formdata.append('image', file);
        mutatePostQnA({
            // TODO: 상세 정보 작업 완료 후 수정 예정
            productSeq: 1,
            body: formdata,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 pt-5">
            <Controller
                control={control}
                name="type"
                render={({ field }) => <SelectWithRef {...field} />}
            />
            <p className="mt-1 text-body3 text-pointRed">
                {errors.type?.message}
            </p>
            <textarea
                {...register('content')}
                className="mt-3 min-h-48 w-full resize-none rounded-sm border border-gray200 p-4 text-body2 placeholder:text-gray400 focus:outline-none"
                placeholder="내용을 입력해주세요."
                maxLength={500}
            />
            <div className="flex justify-between">
                <p className="mt-1 text-body3 text-pointRed">
                    {errors.content?.message}
                </p>
                <span className="block text-right text-body3 text-gray400">
                    {content.length}/500
                </span>
            </div>
            <div className="mt-4">
                <p className="text-body2_b text-gray400">사진</p>
                <UploadPhoto
                    register={register}
                    // ref={inputFileRef}
                    previewImage={previewImage}
                    handleImageUpload={handleImageUpload}
                    handleImageRemove={handleImageRemove}
                />
            </div>
            <div className="fixed bottom-0 left-0 right-0 m-auto flex max-w-default gap-3 px-4 pb-8 [&>button]:w-full">
                <GrayBorderButton>취소</GrayBorderButton>
                <PrimaryBkButton
                    type="submit"
                    disabled={!isValid || !file?.name.length}
                >
                    등록
                </PrimaryBkButton>
            </div>
        </form>
    );
}

const SelectWithRef = forwardRef(
    (
        { onChange }: { onChange: () => void },
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <Select onValueChange={onChange}>
                <SelectTrigger
                    className="h-12 rounded-sm border border-gray200 px-4 text-gray400"
                    ref={ref}
                >
                    <SelectValue placeholder="문의 유형을 선택해주세요" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectGroup>
                        <SelectItem value="배송">배송</SelectItem>
                        <SelectItem value="상품">상품</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        );
    },
);

SelectWithRef.displayName = 'SelectWithRef';
