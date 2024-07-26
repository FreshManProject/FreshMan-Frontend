import { createBrowserRouter } from 'react-router-dom';
import ProductPage from './pages/Product/ProductPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterSuccessPage from './pages/Register/RegisterSuccessPage';
import { LayoutWithNav, LayoutWithOutNav } from './components/common/Layout';
import MyPage from './pages/MyPage/MyPage';
import MyInformationPage from './pages/MyPage/MyInformationPage';
import EditInformationPage from './pages/MyPage/EditInformationPage';
import EditAddressPage from './pages/MyPage/EditAddressPage';
import SearchPage from './pages/Search/SearchPage';
import ProductDetailPage from './pages/Product/ProductDetailPage';
import SocialLoginPage from './pages/Login/SocialLoginPage';
import KakaoSocialLoginPage from './pages/Login/KakaoSocialLoginPage';
import NaverSocialLoginPage from './pages/Login/NaverSocialLoginPage';
import MyLikePage from './pages/MyPage/MyLikePage';
import InquiryPage from './pages/Contact/InquiryPage';
import InquiryListPage from './pages/Contact/InquiryListPage';

export default function Router() {
    return createBrowserRouter([
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
        {
            path: '/register',
            element: <RegisterPage />,
        },
        {
            path: '/register/success',
            element: <RegisterSuccessPage />,
        },
        {
            path: '/',
            element: <LayoutWithNav />,
            children: [
                {
                    path: ':id',
                    element: <ProductPage />,
                },
            ],
        },
        {
            path: '/mypage',
            element: <MyPage />,
        },
        {
            path: '/mypage/info',
            element: <MyInformationPage />,
        },
        { path: '/mypage/info/edit', element: <EditInformationPage /> },
        {
            path: 'mypage/address',
            element: <EditAddressPage />,
        },
        {
            path: 'mypage/like',
            element: <MyLikePage />,
        },
        {
            path: '/search',
            element: <SearchPage />,
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
            path: '/inquiry',
            element: <InquiryPage />,
        },
        {
            path: '/inquiry/list',
            element: <InquiryListPage />,
        },
    ]);
}
