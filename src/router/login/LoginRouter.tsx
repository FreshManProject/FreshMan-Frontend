import KakaoSocialLoginPage from '@/pages/Login/KakaoSocialLoginPage';
import NaverSocialLoginPage from '@/pages/Login/NaverSocialLoginPage';
import SocialLoginPage from '@/pages/Login/SocialLoginPage';

export const LoginRouter = [
    {
        path: '/login',
        element: <SocialLoginPage />,
    },
    {
        path: '/login/oauth2/code/kakao',
        element: <KakaoSocialLoginPage />,
    },
    {
        path: '/login/oauth2/code/naver',
        element: <NaverSocialLoginPage />,
    },
];
