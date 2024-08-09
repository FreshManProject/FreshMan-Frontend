import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    RegisterUserFormData,
    registerUserSchema,
} from '@/types/Validation/yupRegister';
import { Input } from '@/components/ui/input';
import DaumPostCode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PrimaryBkButton } from '../common/Button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        setValue,
        // watch,
        formState: { errors, isValid },
    } = useForm<RegisterUserFormData>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: { name: '', phone: '', address: '', addressDetail: '' },
        resolver: yupResolver(registerUserSchema),
    });
    const navigate = useNavigate();
    const [postCodeIsOpen, setPostCodeIsOpen] = useState(false);

    const onSubmit = () => {
        // backend 통신 코드
        navigate('/register/success');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 pt-10">
            <h2 className={'text-title1_b'}>
                기본 정보를
                <br /> 입력해주세요.
            </h2>
            <div className={'mb-5 mt-5'}>
                <label className="text-body2 text-gray400" htmlFor={'name'}>
                    {'이름'}
                </label>
                <Input
                    id={'name'}
                    type={'text'}
                    placeholder={'이름 입력'}
                    className={
                        'rounded-none text-body3 text-bk placeholder:text-gray300'
                    }
                    {...register('name')}
                />
                {errors.name && (
                    <p className="mt-1 text-body3 text-pointRed">
                        {errors.name.message}
                    </p>
                )}
            </div>
            <div className={'mb-5 mt-5'}>
                <label className="text-body2 text-gray400" htmlFor={'phone'}>
                    {'연락처'}
                </label>
                <Input
                    id={'phone'}
                    type="number"
                    placeholder={'숫자만 입력'}
                    className={
                        'rounded-none text-body3 text-bk placeholder:text-gray300'
                    }
                    {...register('phone')}
                />
                {errors.phone && (
                    <p className="mt-1 text-body3 text-pointRed">
                        {errors.phone.message}
                    </p>
                )}
            </div>
            <div className={'mb-5 mt-5'}>
                <label className="text-body2 text-gray400" htmlFor={'address'}>
                    {'주소'}
                </label>
                <div className={'flex flex-row'}>
                    <Input
                        id={'address'}
                        type={'text'}
                        placeholder={'건물, 지번 또는 도로명 검색'}
                        readOnly
                        className={
                            'rounded-none text-body3 text-bk placeholder:text-gray300'
                        }
                        {...register('address')}
                    />
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
                </div>
                {errors.address && (
                    <p className="mt-1 text-body3 text-pointRed">
                        {errors.address.message}
                    </p>
                )}
            </div>
            <div className={'mb-5 mt-5'}>
                <label
                    className="text-body2 text-gray400"
                    htmlFor={'addressDetail'}
                >
                    {'상세주소'}
                </label>
                <Input
                    id={'addressDetail'}
                    type={'text'}
                    placeholder={'상세주소'}
                    className={
                        'rounded-none text-body3 text-bk placeholder:text-gray300'
                    }
                    {...register('addressDetail')}
                />
                {errors.addressDetail && (
                    <p className="mt-1 text-body3 text-pointRed">
                        {errors.addressDetail.message}
                    </p>
                )}
            </div>
            <div className="fixed bottom-0 left-0 right-0 m-auto max-w-default px-4 pb-8 [&>button]:w-full">
                <PrimaryBkButton disabled={!isValid} type="submit">
                    다음
                </PrimaryBkButton>
            </div>
        </form>
    );
}
