import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function RegisterSuccessPage() {
    const navigate = useNavigate();
    return (
        <div>
            <div className={'mt-[220px] flex items-center justify-center'}>
                <img
                    className={'h-[150px] w-[150px]'}
                    src={'/images/Yellow_party_popper.png'}
                    alt={'회원가입을 축하합니다.'}
                />
            </div>
            <div
                className={
                    'mt-[47px] flex flex-col items-center justify-center'
                }
            >
                <h1 className={'text-4xl font-bold'}>
                    회원가입이 완료되었습니다!
                </h1>
                <h2 className={'text-2xl font-medium'}>
                    FreshMan과 편리한 쇼핑 되세요.
                </h2>
            </div>
            <Button
                onClick={() => navigate('/categories')}
                className={
                    'absolute bottom-8 flex w-full max-w-[600px] items-center justify-center rounded-xl bg-black py-4 text-white hover:bg-gray-200'
                }
            >
                홈으로 가기
            </Button>
        </div>
    );
}
