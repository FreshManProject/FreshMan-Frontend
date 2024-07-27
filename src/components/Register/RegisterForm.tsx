import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    RegisterUserFormData,
    registerUserSchema,
} from '@/types/Validation/yupRegister';
import { Input } from '@/components/ui/input';
import DaumPostCode from 'react-daum-postcode';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { Sheet, SheetRef } from 'react-modal-sheet';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../common/Button/SubmitButton';

export default function RegisterForm() {
    const [showDaumPostCodeModal, setShowDaumPostCodeModal] =
        useState<boolean>(false);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterUserFormData>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { name: '', phone: '', address: '', addressDetail: '' },
        resolver: yupResolver(registerUserSchema),
    });
    const navigate = useNavigate();

    const watchName = watch('name');
    const watchPhone = watch('phone');
    const watchAddress = watch('address');
    const watchAddressDetail = watch('addressDetail');

    const btnActive = !!(
        watchName &&
        watchPhone &&
        watchAddress &&
        watchAddressDetail
    );

    const handleDaumAddress = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowDaumPostCodeModal(!showDaumPostCodeModal);
    };

    const ref = useRef<SheetRef>();

    const onSubmit = () => {
        // backend 통신 코드
        navigate('/register/success');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'mb-5 mt-5'}>
                <h2 className={'text-2xl font-bold'}>
                    {'기본 정보를 '}
                    <br /> {'입력해주세요.'}
                </h2>
            </div>
            <div className={'mb-5 mt-5'}>
                <label className={'text-gray-400'} htmlFor={'name'}>
                    {'이름'}
                </label>
                <Input
                    id={'name'}
                    type={'text'}
                    placeholder={'이름 입력'}
                    className={'rounded-none'}
                    {...register('name')}
                />
                {errors.name && (
                    <p className={'text-pointRed'}>{errors.name.message}</p>
                )}
            </div>
            <div className={'mb-5 mt-5'}>
                <label className={'text-gray-400'} htmlFor={'phone'}>
                    {'연락처'}
                </label>
                <Input
                    id={'phone'}
                    type={'tel'}
                    placeholder={'숫자만 입력'}
                    className={'rounded-none'}
                    {...register('phone')}
                />
                {errors.phone && (
                    <p className={'text-pointRed'}>{errors.phone.message}</p>
                )}
            </div>
            <div className={'mb-5 mt-5'}>
                <label className={'text-gray-400'} htmlFor={'address'}>
                    {'주소'}
                </label>
                <div className={'flex flex-row'}>
                    <Input
                        id={'address'}
                        type={'text'}
                        placeholder={'건물, 지번 또는 도로명 검색'}
                        className={'rounded-none'}
                        {...register('address')}
                    />
                    <Button
                        className={
                            'ml-3 rounded-xl bg-black text-white hover:bg-white hover:text-black'
                        }
                        onClick={handleDaumAddress}
                    >
                        {'우편번호'}
                    </Button>
                </div>
                {errors.address && (
                    <p className={'text-pointRed'}>{errors.address.message}</p>
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
                                setValue('address', data.address, {
                                    shouldValidate: false,
                                });
                                setShowDaumPostCodeModal(false);
                            }}
                        />
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
            <div className={'mb-5 mt-5'}>
                <label className={'text-gray-400'} htmlFor={'addressDetail'}>
                    {'상세주소'}
                </label>
                <Input
                    id={'addressDetail'}
                    type={'text'}
                    placeholder={'상세주소'}
                    className={'rounded-none'}
                    {...register('addressDetail')}
                />
                {errors.addressDetail && (
                    <p className={'text-pointRed'}>
                        {errors.addressDetail.message}
                    </p>
                )}
            </div>
            <SubmitButton isActive={btnActive}>다음</SubmitButton>
        </form>
    );
}
