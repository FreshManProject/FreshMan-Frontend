// import { EditInformationForm } from '@/components/mypage/edit';

import { InputField, PostCodeModal, TopHeader } from '@/components/common';
import { PrimaryBkButton } from '@/components/common/Button';
import { usePutMemberAddress } from '@/hooks/query/user';
import useMemberValidation from '@/hooks/useMemberValidation';
import { useAuthStore } from '@/store/user';
import {
    PartialAddressData,
    partialAddressSchema,
    RegisterUserFormData,
} from '@/types/Validation/yupRegister';

export default function EditAddressPage() {
    const {
        user: { address, addressDetail, name, phone, email },
        setUserInfo,
    } = useAuthStore();
    const { register, handleSubmit, errors, isValid, setValue } =
        useMemberValidation<RegisterUserFormData>(partialAddressSchema, {
            address,
            addressDetail,
        });
    const { mutatePutAddress } = usePutMemberAddress();

    const onSubmit = (data: PartialAddressData) => {
        mutatePutAddress(data);
        setUserInfo({ name, phone, email, ...data });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TopHeader>
                <TopHeader.Back />
                <TopHeader.Title title="배송지 변경" />
                <TopHeader.Util cart />
            </TopHeader>
            <div className="px-4">
                <InputField
                    name="주소"
                    type="text"
                    id="address"
                    placeholder="건물, 지번 또는 도로명 검색"
                    register={register}
                    readonly
                    errorMsg={errors.address?.message || ''}
                    inputBtn={<PostCodeModal setAddress={setValue} />}
                />
                <InputField
                    type="text"
                    id="addressDetail"
                    placeholder="상세주소 입력"
                    register={register}
                    errorMsg={errors.addressDetail?.message || ''}
                />
                <div className="fixed bottom-0 left-0 right-0 m-auto max-w-default px-4 pb-8 [&>button]:w-full">
                    <PrimaryBkButton disabled={!isValid} type="submit">
                        수정
                    </PrimaryBkButton>
                </div>
            </div>
        </form>
    );
}
