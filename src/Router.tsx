import { createBrowserRouter } from 'react-router-dom';
import { InquiryListPage, InquiryPage } from './pages/Inquiry';
import {
    RegisterSuccessPage,
    SocialLoginPage,
    SocialLoginRedirectPage,
} from './pages/Member';
import {
    EditAddressPage,
    EditInformationPage,
    MyInformationPage,
    MyLikePage,
    MyPage,
} from './pages/MyPage';
import { LayoutWithNav, LayoutWithOutNav } from './components/common/Layout';
import { ProductDetailPage, ProductPage } from './pages/Product';
import RegisterForm from './components/Register/RegisterForm';
import { SubmitReviewPage } from './pages/Review';
import { SearchPage } from './pages/Search';
import { HomePage } from './pages/Home';
import GlobalError from './GlobalError';

export default function Router() {
    return createBrowserRouter([
        {
            path: '/',
            errorElement: <GlobalError />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/search',
                    element: <SearchPage />,
                },
                {
                    path: '/review',
                    children: [
                        {
                            path: 'submit',
                            element: <SubmitReviewPage />,
                        },
                    ],
                },
                {
                    path: '/auth',
                    children: [
                        {
                            path: 'register',
                            element: <RegisterForm />,
                        },
                        {
                            path: 'success',
                            element: <RegisterSuccessPage />,
                        },
                    ],
                },
                {
                    path: '/categories',
                    element: <LayoutWithNav />,
                    children: [
                        {
                            path: ':id',
                            element: <ProductPage />,
                        },
                    ],
                },
                {
                    element: <LayoutWithOutNav />,
                    children: [
                        {
                            path: '/products/:id',
                            element: <ProductDetailPage />,
                        },
                    ],
                },
                {
                    path: '/mypage',
                    children: [
                        {
                            path: '',
                            element: <MyPage />,
                        },
                        {
                            path: 'address',
                            element: <EditAddressPage />,
                        },
                        {
                            path: 'like',
                            element: <MyLikePage />,
                        },
                        {
                            path: 'info',
                            children: [
                                {
                                    element: <MyInformationPage />,
                                },
                                {
                                    path: 'edit',
                                    element: <EditInformationPage />,
                                },
                            ],
                        },
                    ],
                },
                {
                    path: '/login',
                    element: <SocialLoginPage />,
                },
                {
                    path: '/authorize',
                    element: <SocialLoginRedirectPage />,
                },
                {
                    path: 'inquiry',
                    children: [
                        {
                            path: '',
                            element: <InquiryListPage />,
                        },
                        {
                            path: 'submit',
                            element: <InquiryPage />,
                        },
                    ],
                },
            ],
        },
    ]);
}
