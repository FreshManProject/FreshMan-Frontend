export default function SocialLoginPage() {
    const kakaoLink = 'http://3.36.90.34:8080/oauth2/authorization/kakao';
    const naverLink = 'http://3.36.90.34:8080/oauth2/authorization/naver';

    const handleKakaoLogin = async () => {
        window.location.href = kakaoLink;
    };

    const handleNaverLogin = () => {
        window.location.href = naverLink;
    };

    return (
        <div className="mt-[475px] flex max-w-[600px] flex-col items-center justify-center">
            <button
                onClick={handleKakaoLogin}
                className="mb-[10px] flex h-[60px] w-[343px] items-center rounded-md bg-[#FFE300]"
                type="button"
            >
                <img
                    className="mx-8 h-8 w-8"
                    src="/images/raphael_bubble.png"
                    alt="카카오로 시작하기"
                />
                <h3 className="mx-2 text-lg">카카오로 시작하기</h3>
            </button>
            <button
                onClick={handleNaverLogin}
                className="flex h-[60px] w-[343px] items-center rounded-md bg-[#2AC308]"
                type="button"
            >
                <img
                    className="mx-9 h-6 w-6"
                    src="/images/Vector.png"
                    alt="네이버로 시작하기"
                />
                <h3 className="mx-2 text-lg">네이버로 시작하기</h3>
            </button>
        </div>
    );
}
