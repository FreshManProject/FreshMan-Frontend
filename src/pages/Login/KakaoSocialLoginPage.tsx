import axios from 'axios';
import { useEffect } from 'react';

export default function KakaoSocialLoginPage() {
    useEffect(() => {
        const authCode = new URL(document.location.toString()).searchParams.get(
            'code',
        );
        if (authCode) {
            console.log('authCode : ', authCode);
            const loginHandler = async () => {
                try {
                    const response = await axios.get(
                        `${process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL}/login/oauth2/code/kakao?code=${authCode}`,
                    );
                    if (response.status === 200) {
                        console.log(response.data);
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            loginHandler();
        }
    }, []);
    return <div>카카오 소셜 로그인 인가 코드 받는 페이지</div>;
}
