// import { EditInformationForm } from '@/components/mypage/edit';

import { InputField, TopHeader } from '@/components/common';
import { PrimaryBkButton } from '@/components/common/Button';
import { usePutMember } from '@/hooks/query/user';
import useMemberValidation from '@/hooks/useMemberValidation';
import { useAuthStore } from '@/store/user';
import {
    PartialUserData,
    partialUserSchema,
    RegisterUserFormData,
} from '@/types/Validation/yupRegister';

export default function EditInformationPage() {
    const {
        user: { name, email, phone, address, addressDetail },
        setUserInfo,
    } = useAuthStore();
    const { register, handleSubmit, errors, isValid } =
        useMemberValidation<RegisterUserFormData>(partialUserSchema, {
            name,
            email,
            phone,
        });
    const { mutatePutMember } = usePutMember();

    const onSubmit = (data: PartialUserData) => {
        mutatePutMember(data);
        setUserInfo({ ...data, address, addressDetail });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TopHeader>
                <TopHeader.Back />
                <TopHeader.Title title="내 정보 변경" />
                <TopHeader.Util cart />
            </TopHeader>
            <div className="px-4">
                <InputField
                    name="이름"
                    type="text"
                    id="name"
                    defaultValue={name}
                    placeholder="이름 입력"
                    register={register}
                    errorMsg={errors.name?.message || ''}
                />
                <InputField
                    name="이메일"
                    type="text"
                    id="email"
                    defaultValue={email}
                    placeholder="이메일 입력"
                    register={register}
                    errorMsg={errors.email?.message || ''}
                />
                <InputField
                    name="연락처"
                    type="number"
                    id="phone"
                    defaultValue={phone}
                    placeholder="이메일 입력"
                    register={register}
                    errorMsg={errors.phone?.message || ''}
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
