import { createBrowserRouter } from 'react-router-dom';
import GlobalError from './GlobalError';
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

export default function Router() {
    return createBrowserRouter([
        {
            path: '/register',
            element: <RegisterPage />,
        },
        {
            path: '/register/success',
            element: <RegisterSuccessPage />,
        },
        {
            path: '/categories',
            element: <LayoutWithNav />,
            children: [
                {
                    path: '',
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
            path: '/*',
            element: <GlobalError />,
        },
    ]);
}
