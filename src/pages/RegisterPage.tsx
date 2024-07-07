import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    RegisterUserFormData,
    registerUserSchema,
} from '../types/Validation/yupRegister';
import { Input } from '../components/ui/input';
import DaumPostCode from 'react-daum-postcode';
import { Button } from '../components/ui/button';
import { useRef, useState } from 'react';
import { Sheet, SheetRef } from 'react-modal-sheet';

export default function RegisterPage() {
    const [showDaumPostCodeModal, setShowDaumPostCodeModal] =
        useState<boolean>(false);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterUserFormData>({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
        defaultValues: { name: '', phone: '', address: ' ', addressDetail: '' },
        resolver: yupResolver(registerUserSchema),
    });

    const phoneValue = watch('phone');
    const handleDaumAddress = () => {
        setShowDaumPostCodeModal(!showDaumPostCodeModal);
    };

    const ref = useRef<SheetRef>();

    const onSubmit = (data: RegisterUserFormData) => {
        console.log('이름 : ', data.name);
        console.log('연락처 : ', data.phone);
        console.log('주소 : ', data.address);
        console.log('상세주소 : ', data.addressDetail);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5 mt-5">
                <h2 className="text-2xl font-bold">
                    기본 정보를 <br /> 입력해주세요.
                </h2>
            </div>
            <div className="mb-5 mt-5">
                <label className="text-gray-400" htmlFor="name">
                    이름
                </label>
                <Input
                    id="name"
                    type="text"
                    placeholder="이름 입력"
                    {...register('name')}
                />
                {errors.name && (
                    <p className="text-black">{errors.name.message}</p>
                )}
            </div>
            <div className="mb-5 mt-5">
                <label className="text-gray-400" htmlFor="phone">
                    연락처
                </label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="숫자만 입력"
                    value={phoneValue}
                    {...register('phone')}
                />
                {errors.phone && (
                    <p className="text-black">{errors.phone.message}</p>
                )}
            </div>
            <div className="mb-5 mt-5">
                <label className="text-gray-400" htmlFor="address">
                    주소
                </label>
                <div className="flex flex-row">
                    <Input
                        id="address"
                        type="text"
                        placeholder="건물, 지번 또는 도로명 검색"
                        {...register('address')}
                    />
                    <Button
                        className="ml-2 rounded-xl bg-black text-white hover:bg-white hover:text-black"
                        onClick={() => handleDaumAddress()}
                    >
                        우편번호
                    </Button>
                </div>
                {errors.address && (
                    <p className="text-black">{errors.address.message}</p>
                )}
            </div>
            <Sheet
                ref={ref}
                isOpen={showDaumPostCodeModal}
                onClose={() => setShowDaumPostCodeModal(false)}
                snapPoints={[0.6]}
            >
                <Sheet.Container>
                    <Sheet.Content>
                        <DaumPostCode
                            onComplete={(data) => {
                                setValue('address', data.address);
                                setShowDaumPostCodeModal(false);
                            }}
                        />
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
            <div className="mb-5 mt-5">
                <label className="text-gray-400" htmlFor="addressDetail">
                    상세주소
                </label>
                <Input
                    id="addressDetail"
                    type="text"
                    placeholder="상세주소"
                    {...register('addressDetail')}
                />
                {errors.addressDetail && (
                    <p className="text-black">{errors.addressDetail.message}</p>
                )}
            </div>
            <div className="flex w-full items-center justify-center rounded-xl bg-black text-white">
                <Button type="submit">다음</Button>
            </div>
        </form>
    );
}
