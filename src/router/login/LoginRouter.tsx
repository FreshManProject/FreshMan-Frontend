import SocialLoginPage from '@/pages/Login/SocialLoginPage';
import SocialLoginRedirectPage from '@/pages/Login/SocialLoginRedirectPage';

export const LoginRouter = [
    {
        path: '/login',
        element: <SocialLoginPage />,
    },
    {
        path: '/authorize',
        element: <SocialLoginRedirectPage />,
    },
];
