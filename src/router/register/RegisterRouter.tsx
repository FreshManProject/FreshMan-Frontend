import RegisterPage from '@/pages/Register/RegisterPage';
import RegisterSuccessPage from '@/pages/Register/RegisterSuccessPage';

export const RegisterRouter = [
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/register/success',
        element: <RegisterSuccessPage />,
    },
];
