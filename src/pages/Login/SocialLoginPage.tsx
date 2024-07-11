import { useNavigate } from 'react-router-dom';

export default function SocialLoginPage() {
    const navigate = useNavigate();
    const handleKakaoLogin = () => {
        //카카오 소셜 로그인 기능
        navigate('/register');
    };

    const handleNaverLogin = () => {
        //네이버 소셜 로그인 기능
        navigate('/register');
    };
    return (
        <div className="mt-[475px] flex max-w-[600px] flex-col items-center justify-center">
            <div
                onClick={() => handleKakaoLogin()}
                className="mb-[10px] flex h-[60px] w-[343px] items-center rounded-md bg-[#FFE300]"
            >
                <img
                    className="mx-8 h-8 w-8"
                    src="/images/raphael_bubble.png"
                    alt="카카오로 시작하기"
                />
                <h3 className="mx-2 text-lg">카카오로 시작하기</h3>
            </div>
            <div
                onClick={() => handleNaverLogin()}
                className="flex h-[60px] w-[343px] items-center rounded-md bg-[#2AC308]"
            >
                <img
                    className="mx-9 h-6 w-6"
                    src="/images/Vector.png"
                    alt="네이버로 시작하기"
                />
                <h3 className="mx-2 text-lg">네이버로 시작하기</h3>
            </div>
        </div>
    );
}
