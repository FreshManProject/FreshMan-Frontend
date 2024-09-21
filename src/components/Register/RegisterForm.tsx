import {
    RegisterUserFormData,
    registerUserSchema,
} from '@/types/Validation/yupRegister';
import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';
import { usePostJoinMember } from '@/hooks/query/user';
import useMemberValidation from '@/hooks/useMemberValidation';
import { PrimaryBkButton } from '../common/Button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { InputField } from '../common';

export default function RegisterForm() {
    const { register, handleSubmit, setValue, errors, isValid } =
        useMemberValidation<RegisterUserFormData>(registerUserSchema, {
            name: '',
            email: '',
            phone: '',
            address: '',
            addressDetail: '',
        });

    const { mutatePostJoinMember } = usePostJoinMember();
    const [postCodeIsOpen, setPostCodeIsOpen] = useState(false);

    const onSubmit = (data: RegisterUserFormData) => {
        const joinData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: `${data.address} ${data.addressDetail}`,
        };
        mutatePostJoinMember(joinData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <InputField
                name="이름"
                type="text"
                id="name"
                placeholder="이름 입력"
                register={register}
                errorMsg={errors.name?.message || ''}
            />
            <InputField
                name="이메일"
                type="text"
                id="email"
                placeholder="이메일 입력"
                register={register}
                errorMsg={errors.email?.message || ''}
            />
            <InputField
                name="연락처"
                type="number"
                id="phone"
                placeholder="숫자만 입력"
                register={register}
                errorMsg={errors.phone?.message || ''}
            />
            <InputField
                name="주소"
                type="text"
                id="address"
                placeholder="건물, 지번 또는 도로명 검색"
                register={register}
                readonly
                errorMsg={errors.address?.message || ''}
                inputBtn={
                    <Drawer
                        open={postCodeIsOpen}
                        onOpenChange={(open) => setPostCodeIsOpen(open)}
                    >
                        <DrawerTrigger
                            className="ml-3 w-24 rounded-xl bg-bk text-body1 text-white"
                            onClick={() => setPostCodeIsOpen(true)}
                        >
                            우편번호
                        </DrawerTrigger>
                        <DrawerContent>
                            <DaumPostCode
                                onComplete={(data) => {
                                    setValue('address', data.address, {
                                        shouldValidate: false,
                                    });
                                    setPostCodeIsOpen(false);
                                }}
                            />
                        </DrawerContent>
                    </Drawer>
                }
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
                    가입하기
                </PrimaryBkButton>
            </div>
        </form>
    );
}
